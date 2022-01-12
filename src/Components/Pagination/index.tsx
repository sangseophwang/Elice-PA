import styled from 'styled-components';
import { Box, List, ListItem } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PaginationProps {
  course: number;
  currentPage: number;
  onChangePage: Function;
}

export default function Pagination({
  course,
  currentPage,
  onChangePage,
}: PaginationProps) {
  const LIMIT_PAGE = Math.ceil(course / 20);
  let pageNumber: number[] = [];
  let visiblePage = currentPage;

  // 페이지네이션 수 배열에 담기
  for (let i = 1; i <= LIMIT_PAGE; i++) {
    pageNumber.push(i);
  }

  // 추출할 페이지 넘버 분류
  if (visiblePage - 4 <= 0) {
    visiblePage = 0;
    pageNumber = pageNumber.slice(visiblePage, visiblePage + 5);
  } else if (visiblePage > LIMIT_PAGE) {
    visiblePage = LIMIT_PAGE - 4;
    pageNumber = pageNumber.slice(visiblePage, visiblePage + 9);
  }

  // 이전 화살표 버튼
  const handlePreviousButton = () => {
    onChangePage(currentPage - 1);
  };

  // 다음 화살표 버튼
  const handleNextButton = () => {
    onChangePage(currentPage + 1);
  };

  // 페이지네이션, 현재 페이지 위치 출력
  const PaginationNumber = (props: any) => {
    return (
      <Number
        className={props.value === currentPage ? 'Here' : ''}
        onClick={() => {
          onChangePage(props.value);
        }}
      >
        {props.value}
      </Number>
    );
  };

  return (
    <>
      <PaginationContainer>
        <PaginationList>
          <Back
            className={currentPage === 1 ? 'Disable' : ''}
            onClick={handlePreviousButton}
          />
          {pageNumber.map((number, index) => (
            <PaginationNumber key={index} value={number} />
          ))}
          <Next
            className={currentPage === LIMIT_PAGE ? 'Disable' : ''}
            onClick={handleNextButton}
          />
        </PaginationList>
      </PaginationContainer>
    </>
  );
}

const PaginationContainer = styled(Box)`
  width: 100%;
  display: flex;
  margin-top: 25px;
  justify-content: center;
`;

const PaginationList = styled(List)`
  display: flex;
  align-items: center;
`;

const Number = styled(ListItem)`
  width: 24px;
  height: 24px;
  color: #999;
  cursor: pointer;
  font-size: 14px;
  padding-left: 8px;
  margin: 2px 5px 0 5px;
`;

const Back = styled(ArrowBackIosIcon)`
  cursor: pointer;
  font-size: 14px;
  color: #524fa1;
`;

const Next = styled(ArrowForwardIosIcon)`
  cursor: pointer;
  font-size: 14px;
  color: #524fa1;
`;
