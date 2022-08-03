import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//https://mui.com/material-ui/customization/default-theme/#main-content
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Notes />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
