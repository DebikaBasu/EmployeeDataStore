import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://interviewtesting.onrender.com/v1/users/employee/list';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await axios.get(API_URL);
    console.log('API Response:', response.data); // Debug here
    return response.data;
  });
  

  const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
      list: [], // Must be an array
      selectedEmployee: null,
      status: 'idle',
    },
    reducers: {
      selectEmployee: (state, action) => {
        state.selectedEmployee = action.payload;
      },
      deleteEmployee: (state, action) => {
        state.list = state.list.filter((employee) => employee.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployees.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
          state.list = action.payload; // Populate the list with API data
          state.status = 'succeeded';
        })
        .addCase(fetchEmployees.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });
  
  export const { selectEmployee, deleteEmployee } = employeeSlice.actions;
  export default employeeSlice.reducer;