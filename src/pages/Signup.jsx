import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1650436795838-6a9a214129d3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0";

function passwordScore(password) {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  if (password.length >= 12) score += 1;
  return score;
}

function strengthMeta(score) {
  const percent = Math.round((score / 5) * 100);
  let color = "bg-red-500";
  let label = "Very weak";
  if (score >= 4) {
    color = "bg-green-500";
    label = "Strong";
  } else if (score >= 3) {
    color = "bg-yellow-400";
    label = "Good";
  } else if (score >= 2) {
    color = "bg-orange-400";
    label = "Weak";
  }
  return { percent, color, label };
}

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const score = useMemo(() => passwordScore(password), [password]);
  const strength = strengthMeta(score);

  function validate() {
    const e = {};
    if (!fullName.trim()) e.fullName = "Full name is required";
    if (!email.match(/^\S+@\S+\.\S+$/)) e.email = "Enter a valid email";
    if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (confirm !== password) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const usersRes = await fetch("http://localhost:3300/users");
      if (!usersRes.ok) {
        throw new Error("Unable to reach server. Is json-server running on port 3300?");
      }
      const users = await usersRes.json();

      const emailLower = email.trim().toLowerCase();
      const existing = users.find(
        (u) => u.email && String(u.email).trim().toLowerCase() === emailLower
      );

      if (existing) {
        setSubmitError("An account with that email already exists. Please log in or use a different email.");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        fullName: fullName.trim(),
        email: emailLower,
        password, 
        createdAt: new Date().toISOString(),
      };

      const response = await fetch("http://localhost:3300/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      const data = await response.json();
      console.log("Registration successful:", data);

      alert("Account created successfully! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      if (String(error).includes("Failed to fetch") || String(error).includes("NetworkError")) {
        setSubmitError("Could not connect to http://localhost:3300 — start json-server with `npm run server` (or check your backend).");
      } else {
        setSubmitError(error.message || "An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="hidden lg:block lg:w-1/2 relative" aria-hidden="true">
          <img
            src={HERO_IMAGE}
            alt="Luxury car"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/30"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
            <h2 className="text-4xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Join Carsokoni — Drive the Dream
            </h2>
            <p className="text-lg max-w-xl opacity-90 mb-6">
              Access curated vehicles, financing options and exclusive deals across Kenya.
              Create an account to save searches, get financing quotes and buy right from your phone.
            </p>

            <ul className="space-y-3 text-sm opacity-90">
              <li>✅ Trusted listings</li>
              <li>✅ Financing & insurance tools</li>
              <li>✅ Secure checkout</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div
            className="w-full max-w-md bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-500 fade-in"
            style={{ boxShadow: "0 10px 30px rgba(2,6,23,0.25)" }}
          >
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Create an account</h3>
              <p className="text-sm text-gray-600 mt-2">
                Fast, secure and tailored for Kenyan drivers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg border hover:shadow-md transition bg-white"
                onClick={() => alert("Google signup (mock)")}
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm">Sign up with Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg border hover:shadow-md transition bg-blue-600 text-white"
                onClick={() => alert("Facebook signup (mock)")}
              >
                <img src="https://www.svgrepo.com/show/157817/facebook.svg" alt="FB" className="w-5 h-5 invert" />
                <span className="text-sm">Sign up with Facebook</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <span className="h-px bg-gray-300 absolute left-6 right-6 top-1/2"></span>
              <span className="bg-white/60 px-3 relative text-sm text-gray-600">Or use your email</span>
            </div>

            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                    errors.fullName ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="John Mwangi"
                  autoComplete="name"
                  required
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="you@example.co.ke"
                  autoComplete="email"
                  required
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                      errors.password ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Create a strong password"
                    aria-describedby="pwd-help"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-2 text-sm text-gray-600 px-2 py-1 rounded"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <small id="pwd-help" className="text-xs text-gray-600">
                    Use 8+ characters, mix letters, numbers & symbols.
                  </small>
                  <small className="text-xs text-gray-600">{strength.label}</small>
                </div>

                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`${strength.color} h-full rounded-full transition-all duration-300`}
                    style={{ width: `${strength.percent}%` }}
                  />
                </div>
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirm" className="text-sm font-medium text-gray-700">Confirm password</label>
                <input
                  id="confirm"
                  name="confirm"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  type="password"
                  className={`mt-1 w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400 transition ${
                    errors.confirm ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Re-type your password"
                  required
                />
                {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" required />
                  <span className="text-gray-600">I agree to the <a href="#" className="text-blue-600 underline">Terms</a></span>
                </label>
                <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</Link>
              </div>

              {submitError && (
                <div className="text-red-500 text-sm text-center">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-red-600 text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white/50 backdrop-blur-sm py-4 text-center">
        <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Carsokoni • Built with ♥ in Kenya</p>
      </footer>
    </div>
  );
}
