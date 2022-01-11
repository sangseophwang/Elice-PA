import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
    button: {
      fontWeight: 400,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      main: '#222222',
    },
  },
});

export default Theme;
