import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
    button: {
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#151618',
    },
  },
});

export default Theme;
