import { Container, Grid, Item, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const [notes, setNotes] = useState();

  const removeNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, { method: 'DELETE' });
    setNotes(notes.filter((note) => note.id !== id));
  };

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/notes');
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!notes) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note, index) => {
          return (
            <Grid key={note.id} item md={6} xs={12}>
              <NoteCard note={note} removeNote={removeNote} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
