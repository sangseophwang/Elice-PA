import styled from 'styled-components';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

export default function CourseBar() {
  return (
    <BoxContainer>
      <Bar position="static">
        <Toolbar style={{ minHeight: 49, padding: 0 }}>
          <TrackButton>트랙</TrackButton>
          <ActiveButton>과목</ActiveButton>
        </Toolbar>
      </Bar>
    </BoxContainer>
  );
}

const BoxContainer = styled(Box)`
  margin-bottom: 18px;
  border-bottom: 1px solid #e1e2e4;
`;

const Bar = styled(AppBar)`
  box-shadow: none;
  background-color: inherit;
`;

const ActiveButton = styled(Button)`
  height: 48px;
  font-size: 16px;
  border-radius: 0;
  color: #524fa1;
  line-height: 16px;
  font-weight: bold;
  box-shadow: inset 0px -4px 0px #524fa1;
`;

const TrackButton = styled(Button)`
  height: 48px;
  color: #151618;
  font-size: 16px;
  border-radius: 0;
  line-height: 16px;
  margin: 0 7px 0 -3px;
`;
