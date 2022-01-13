import styled from 'styled-components';
import EmptyIcon from 'Assets/empty.png';
import { DataInterface } from 'Pages/interface';
import Header from 'Components/CardList/Header';
import Content from 'Components/CardList/Content';
import { Typography, Divider, Grid, Card, Box } from '@mui/material';

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
      <Grid container spacing={2}>
        {data && data.length > 0 ? (
          data.map((element, index) => (
            <Grid item xs={12} md={4} lg={3} key={index}>
              <CourseCard
                variant="outlined"
                sx={{ cursor: 'pointer', border: 'none' }}
              >
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
          <EmptyBox>
            <EmptyImage
              src={EmptyIcon}
              alt="검색 결과가 없을 때 나오는 아이콘"
            />
            <EmptyMessage>검색 결과가 없습니다.</EmptyMessage>
          </EmptyBox>
        )}
      </Grid>
    </>
  );
}

const CourseCard = styled(Card)`
  height: 338px;
  min-width: 248px;
  padding: 28px 24px;
`;

const EmptyBox = styled(Box)`
  width: 100%;
  height: 232px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
`;

const EmptyImage = styled('img')`
  width: 64px;
  margin-bottom: 30px;
`;

const EmptyMessage = styled(Typography)`
  color: #999999;
  font-weight: 300;
`;
