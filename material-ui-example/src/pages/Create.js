import React, { useState } from 'react';
import {
  Autocomplete,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import { KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CustomizedButton = styled(Button)(() => ({
  fontSize: 48,
  backgroundColor: '#2e8b57',
  '&:hover': {
    backgroundColor: 'red',
  },
}));

const CustomizedTextField = styled(TextField)(() => ({
  marginTop: 20,
  marginBottom: 20,
  display: 'block',
}));

const options = [
  { label: 'Finance', id: 1 },
  { label: 'Task', id: 2 },
  { label: 'Reminder', id: 3 },
  { label: 'Personal', id: 4 },
  { label: 'Work', id: 5 },
];

export default function Create() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState('');
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState(options[0]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if (title && details && category) {
      let ctgry = category.label;
      await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details, category: ctgry }),
      });

      navigate('/');
    }
  };

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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <CustomizedTextField
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          label="Note Title"
          color="secondary"
          required
          fullWidth
          error={titleError}
        />
        <CustomizedTextField
          onChange={(e) => setDetails(e.target.value)}
          variant="outlined"
          label="Note TitleDetails"
          color="secondary"
          multiline
          rows={4}
          required
          fullWidth
          error={detailsError}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300, marginTop: 2, marginBottom: 3 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
          required
          value={category}
          onChange={(event, newValue) => {
            setCategory(newValue);
          }}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          {/* // sx={{
          //   fontSize: 48,
          //   backgroundColor: 'violet',
          // }} */}
          Submit
        </Button>
      </form>
    </Container>
  );
}
