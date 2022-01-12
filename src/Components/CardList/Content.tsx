import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import BarChart from '@mui/icons-material/BarChart';
import Computer from '@mui/icons-material/Computer';

interface ContentProps {
  url: string;
}

export default function Content({ url }: ContentProps) {
  return (
    <ContentContainer>
      <TextContainer>
        <TextWrapper>
          <BarChart sx={{ fontSize: 24 }} />
          <Text>난이도 : 미설정</Text>
        </TextWrapper>
        <TextWrapper>
          <Computer sx={{ fontSize: 24 }} />
          <Text>수업 : 온라인</Text>
        </TextWrapper>
        <TextWrapper>
          <TodayIcon sx={{ fontSize: 24 }} />
          <Text>기간 : 무제한</Text>
        </TextWrapper>
      </TextContainer>
      <Logo src={url} alt="과목 로고" />
    </ContentContainer>
  );
}

const Logo = styled('img')`
  width: 52px;
  height: 52px;
  object-fit: contain;
`;

const ContentContainer = styled(Box)`
  height: 88px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const TextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWrapper = styled(Box)`
  display: flex;
  color: #222222;
  align-items: flex-end;
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #7d7e80;
  margin-left: 8px;
`;
