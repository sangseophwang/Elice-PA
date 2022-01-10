import { useState } from 'react';
import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu';
import Modal from 'Components/NavigationBar/Modal';
import { AppBar, Box, Toolbar } from '@mui/material';

export default function MobileBar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className="MobileBar">
      <AppBar
        position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
      >
        <Toolbar>
          <Logo
            src="https://cdn-api.elice.io/api/file/5c3a7a5032f24a41afd80ea89e823f13/elice-academy-colored.png?se=2100-12-31T00%3A00%3A00Z&sp=rt&sv=2020-06-12&sr=b&sig=63D1j7iUcTOu1rwNYgtIn4t%2BuJbuF644n5MKFYSJJ18%3D"
            alt="로고"
          />
          <Box sx={{ flexGrow: 1 }} />
          <MenuButton onClick={handleClick} color="primary" />
        </Toolbar>
        <Modal data={open} handler={handleClick} />
      </AppBar>
    </Box>
  );
}

const Logo = styled.img`
  max-height: 32px;
  cursor: pointer;
`;

const MenuButton = styled(Menu)`
  cursor: pointer;
`;
