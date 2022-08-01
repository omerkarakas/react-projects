import { Button } from '@mui/material';
import { Settings, Delete, RemoveCircle } from '@mui/icons-material';

function App() {
  return (
    <>
      <Button startIcon={<Settings />} variant="text">
        Text
      </Button>
      <Button
        startIcon={<Delete />}
        variant="contained"
        color="primary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
