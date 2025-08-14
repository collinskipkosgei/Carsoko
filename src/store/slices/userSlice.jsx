import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  loading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { loginUser, logoutUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
