import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, InputAdornment } from '@mui/material';

interface SearchBarProps {
  onSearch: Function;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Search
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '& .MuiOutlinedInput-input': {
              padding: '13px 0',
              fontSize: 15,
            },
            '& fieldset': {
              borderColor: 'rgb(201, 202, 204)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(201, 202, 204)',
            },
            '&.Mui-focused fieldset': {
              borderWidth: 1,
              borderColor: '#524fa1',
            },
          },
        }}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

const Search = styled(TextField)`
  border-radius: 4px;
  background-color: white;
  border-color: rgb(201, 202, 204);
`;
