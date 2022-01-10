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
          <Box sx={{ height: 168, backgroundColor: '#524FA1' }}></Box>
        </Box>
        <MenuText>메뉴</MenuText>
        {MENU.map((menu, index) => (
          <MenuButton key={index} sx={{ justifyContent: 'flex-start' }}>
            {menu}
          </MenuButton>
        ))}
      </Drawer>
    </>
  );
}

const MenuText = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 0 0 16px;
  font-size: 12px;
  color: #7d7e80;
`;

const MenuButton = styled(Button)`
  padding-left: 16px;
  height: 54px;
`;
