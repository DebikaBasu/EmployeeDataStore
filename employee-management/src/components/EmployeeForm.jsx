import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployee } from '../redux/employeeSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

const EmployeeForm = () => {
  const selectedEmployee = useSelector((state) => state.employees.selectedEmployee);
  const [formData, setFormData] = useState(selectedEmployee || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedEmployee) setFormData(selectedEmployee);
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    navigate('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">Update</Button>
    </Box>
  );
};

export default EmployeeForm;
