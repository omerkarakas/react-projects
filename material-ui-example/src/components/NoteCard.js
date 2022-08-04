import { DeleteOutlined } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';

const NoteCard = ({ note, removeNote }) => {
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          action={
            <IconButton onClick={() => removeNote(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
