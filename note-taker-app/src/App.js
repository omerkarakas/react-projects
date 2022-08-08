import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout';

//https://mui.com/material-ui/customization/default-theme/#main-content
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
