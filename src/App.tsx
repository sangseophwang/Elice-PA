import Home from 'Pages/Home';
import Theme from 'Styles/Theme';
import { ThemeProvider } from '@mui/material';
import GlobalStyles from 'Styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
