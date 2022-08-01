import React from 'react';
import { Button, Container, Typography } from '@mui/material';

import { KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)(() => ({
  fontSize: 48,
  backgroundColor: '#2e8b57',
  '&:hover': {
    backgroundColor: 'red',
  },
}));

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <CustomizedButton
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
        onClick={() => {
          console.log('button clicked');
        }}
        // sx={{
        //   fontSize: 48,
        //   backgroundColor: 'violet',
        // }}
      >
        Submit
      </CustomizedButton>
      <br />
    </Container>
  );
}
