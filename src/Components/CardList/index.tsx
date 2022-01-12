import { Typography, Divider, Grid, Card } from '@mui/material';
import Header from 'Components/CardList/Header';
import Content from 'Components/CardList/Content';
import { DataInterface } from 'Pages/interface';
import styled from 'styled-components';

interface CardListProps {
  course: number;
  data: DataInterface[];
}

export default function CardList({ course, data }: CardListProps) {
  return (
    <>
      <Typography sx={{ fontSize: 12, fontWeight: 700, marginBottom: 1 }}>
        전체 {course}개
      </Typography>
      <Divider sx={{ marginBottom: '14px' }} />
      <Grid container spacing={1.66}>
        {data && data.length > 0 ? (
          data.map((element, index) => (
            <Grid item key={index}>
              <CourseCard variant="outlined" sx={{ cursor: 'pointer' }}>
                <Header
                  title={element.title}
                  free={element.is_free}
                  type={element.enroll_type}
                  description={element.short_description}
                />
                <Content url={element.logo_file_url} />
              </CourseCard>
            </Grid>
          ))
        ) : (
          <div>
            <h1>검색 결과가 없습니다.</h1>
          </div>
        )}
      </Grid>
    </>
  );
}

const CourseCard = styled(Card)`
  padding: 28px 24px;
  width: 248px;
  height: 338px;
`;
