import styled from 'styled-components';
import { Container } from '@mui/material';
import SearchBar from 'Components/SearchBar';
import CourseBar from 'Components/CourseBar';
import NavigationBar from 'Components/NavigationBar';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <HomeContainer>
        <CourseBar />
        <SearchBar />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled(Container)`
  color: #222222;
  max-width: 1280px;
  padding: 24px 24px 64px 24px;
`;
