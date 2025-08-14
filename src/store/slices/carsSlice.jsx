import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import carsData from '../../data/carsData';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return carsData;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    status: 'idle', 
    error: null
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    },
    updateCar: (state, action) => {
      const index = state.cars.findIndex(car => car.id === action.payload.id);
      if (index !== -1) {
        state.cars[index] = action.payload;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addCar, removeCar, updateCar } = carsSlice.actions;
export default carsSlice.reducer;
