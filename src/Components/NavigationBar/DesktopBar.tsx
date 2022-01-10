import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const MENU = ['홈', '과목 검색'];

export default function DesktopBar() {
  return (
    <Box className="DesktopBar">
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
      >
        <Toolbar>
          <Logo
            src="https://cdn-api.elice.io/api/file/5c3a7a5032f24a41afd80ea89e823f13/elice-academy-colored.png?se=2100-12-31T00%3A00%3A00Z&sp=rt&sv=2020-06-12&sr=b&sig=63D1j7iUcTOu1rwNYgtIn4t%2BuJbuF644n5MKFYSJJ18%3D"
            alt="로고"
          />
          {MENU.map((menu, index) => (
            <MenuButton key={index}>{menu}</MenuButton>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <Button>
            <SearchIcon />
          </Button>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Logo = styled.img`
  max-height: 40px;
  margin-right: 8px;
  cursor: pointer;
`;

const MenuButton = styled(Button)`
  padding-top: 5px;
  min-height: 64px;
  border-radius: 0;
  &:hover {
    box-shadow: inset 0px -4px 0px #524fa1;
    color: #524fa1;
    font-weight: bold;
  }
`;
