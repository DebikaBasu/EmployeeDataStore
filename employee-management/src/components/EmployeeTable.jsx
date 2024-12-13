import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee, selectEmployee } from '../redux/employeeSlice';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees.list);
  console.log('Employees in Redux:', employees); // Debug to ensure it's an array

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (employee) => {
    dispatch(selectEmployee(employee));
    navigate(`/update/${employee.id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(employees) && employees.length > 0 ? (
          employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(employee)}>Edit</Button>
                <Button onClick={() => handleDelete(employee.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} align="center">
              No employees found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default EmployeeTable;
