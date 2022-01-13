import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const MENU = ['홈', '과목검색'];

export default function DesktopBar() {
  return (
    <Box className="DesktopBar">
      <AppBar
        position="sticky"
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
      >
        <Toolbar>
          <Logo
            src="https://cdn-api.elice.io/api/file/acf2993b26374679965b3de2a3fb67a9/academy_148%402x.png?se=2100-12-31T00%3A00%3A00Z&sp=rt&sv=2020-06-12&sr=b&sig=UEaj3MWug%2BL7QWENpSqvzNwgztGLpvBhc4ETa4FWlzc%3D"
            alt="로고"
          />
          {MENU.map((menu, index) =>
            menu === '과목검색' ? (
              <ActiveMenuButton key={index}>{menu}</ActiveMenuButton>
            ) : (
              <MenuButton key={index}>{menu}</MenuButton>
            ),
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Button>
            <SearchIcon />
          </Button>
          <AuthButton>로그인</AuthButton>
          <AuthButton>회원가입</AuthButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Logo = styled.img`
  cursor: pointer;
  max-height: 40px;
  margin-right: 8px;
`;

const ActiveMenuButton = styled(Button)`
  color: #524fa1;
  min-height: 64px;
  padding-top: 5px;
  font-weight: bold;
  border-radius: 0;
  box-shadow: inset 0px -4px 0px #524fa1;
`;

const MenuButton = styled(Button)`
  min-height: 64px;
  padding-top: 5px;
  border-radius: 0;
`;

const AuthButton = styled(Button)`
  font-weight: 700;
  color: #5e5f61;
`;
