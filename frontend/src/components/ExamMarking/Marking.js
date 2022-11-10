import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Marking=()=> {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Question" color="secondary" focused />
      <TextField label="Teacher Answer" color="secondary" focused />
      <TextField label="Student Name" color="secondary" focused />
      <TextField label="Student Answer" color="secondary" focused />
      <TextField label="Total Marks" color="secondary" focused />
      <TextField label="Auto-Graded Marks" variant="filled" color="success" focused />
      
    </Box>
  );
}

export default Marking;