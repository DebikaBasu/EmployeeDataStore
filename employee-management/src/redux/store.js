import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice'; // Import the employee slice

const store = configureStore({
  reducer: {
    employees: employeeReducer, // Register the employee reducer
  },
});

export default store;
