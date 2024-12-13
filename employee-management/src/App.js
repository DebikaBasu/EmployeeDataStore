import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchEmployees } from './redux/employeeSlice';
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees()); // Ensure this is running
  }, [dispatch]);
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/update/:id" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
