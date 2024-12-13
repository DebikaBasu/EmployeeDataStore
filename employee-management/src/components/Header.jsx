import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';

const Header = () => {
  const selectedEmployee = useSelector((state) => state.employees.selectedEmployee);

  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar src="https://via.placeholder.com/150" alt="Employee" />
        <Typography variant="h6" sx={{ ml: 2 }}>
          {selectedEmployee ? selectedEmployee.name : 'Employee Management'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
