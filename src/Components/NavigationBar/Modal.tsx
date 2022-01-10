import {
  Box,
  List,
  Drawer,
  Button,
  Divider,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import Profile from 'Assets/profile.png';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  handler: () => void;
  data: boolean;
}

const MENU = ['홈', '과목 검색', '로그인', '회원가입'];

export default function Modal({ data, handler }: ModalProps) {
  return (
    <>
      <Drawer className="Modal" anchor="right" open={data} onClose={handler}>
        <Box sx={{ width: 320 }}>
          <LoginBox>
            <Box sx={{ width: 272 }}>
              <ProfileBox>
                <ProfileImage src={Profile} alt="프로필 이미지" />
                <Button>
                  <CloseIcon
                    sx={{ color: 'white', marginBottom: 3 }}
                    onClick={handler}
                  />
                </Button>
              </ProfileBox>
              <LoginButton>로그인 해주세요 {'>'}</LoginButton>
              <Typography
                sx={{
                  fontSize: 12,
                  color: 'white',
                  fontWeight: 100,
                  marginTop: -1,
                }}
              >
                로그인하고 학습을 시작하세요!
              </Typography>
            </Box>
          </LoginBox>
        </Box>
        <MenuText>메뉴</MenuText>
        {MENU.map((menu, index) =>
          menu === '과목 검색' ? (
            <ActiveMenuButton key={index} sx={{ justifyContent: 'flex-start' }}>
              {menu}
            </ActiveMenuButton>
          ) : (
            <MenuButton key={index} sx={{ justifyContent: 'flex-start' }}>
              {menu}
            </MenuButton>
          ),
        )}
      </Drawer>
    </>
  );
}

const ProfileImage = styled('img')`
  width: 46px;
`;

const LoginBox = styled(Box)`
  height: 168px;
  background-color: #524fa1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled(Button)`
  color: white;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: -9px;
`;

const MenuText = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0 0 16px;
  font-size: 12px;
  color: #7d7e80;
`;

const ActiveMenuButton = styled(Button)`
  padding-left: 16px;
  height: 54px;
  background-color: #f0f1f3;
  font-weight: 700;
  color: #524fa1;
`;

const MenuButton = styled(Button)`
  padding-left: 16px;
  height: 54px;
`;
