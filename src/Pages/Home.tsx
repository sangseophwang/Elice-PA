import axios from 'axios';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { Container } from '@mui/material';
import CardList from 'Components/CardList';
import Category from 'Components/Category';
import { useEffect, useState } from 'react';
import CourseBar from 'Components/CourseBar';
import SearchBar from 'Components/SearchBar';
import Pagination from 'Components/Pagination';
import { DataInterface } from 'Pages/interface';
import NavigationBar from 'Components/NavigationBar';

export default function Home() {
  const [price, setPrice] = useState([]);
  const [title, setTitle] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [course, setCourse] = useState<number>(0);
  const [data, setData] = useState<DataInterface[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // 데이터 불러오기
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://api-rest.elice.io/org/academy/course/list/',
        {
          params: {
            filter_conditions: JSON.stringify({
              $and: [{ title: `%${title}%` }, { $or: price }],
            }),
            offset: offset,
            count: 20,
          },
        },
      );
      setData(response.data.courses);
      setCourse(response.data.course_count);
    }
    getData();
  }, [offset, price, title]);

  // 페이지 번호 바뀔 때마다 업데이트
  const handlePaginationClick = (number: number) => {
    setPageNumber(number);
    setOffset(20 * (number - 1));
    window.scrollTo(0, 517);
  };

  // 300ms debounced search
  const handleDebounce = debounce((title) => {
    setTitle(title);
  }, 300);

  // 가격 필터
  const handlePrice = (filter: any) => {
    setPrice(filter);
  };

  return (
    <>
      <NavigationBar />
      <HomeContainer>
        <CourseBar />
        <SearchBar onSearch={handleDebounce} />
        <Category onFilter={handlePrice} />
        <CardList course={course} data={data} />
        <Pagination
          course={course}
          currentPage={pageNumber}
          onChangePage={handlePaginationClick}
        />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled(Container)`
  color: #222222;
  max-width: 1280px;
  padding: 24px 24px 64px 24px;
`;
