import {
  Chip,
  Table,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface CategoryProps {
  onFilter: Function;
}

const LIST = ['유형', '진행 방식', '분야', '난이도', '언어', '가격'];
const FILTER = [
  ['과목', '챌린지', '테스트'],
  ['자유 선택형', '순차 완료형'],
  ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
  ['입문', '초급', '중급', '고급'],
  [
    'C',
    'C++',
    '자바',
    '파이썬',
    '자바스크립트',
    'R',
    'HTML/CSS',
    'SQL',
    '아두이노',
    '스크래치',
  ],
  ['무료', '유료'],
];

export default function Category({ onFilter }: CategoryProps) {
  const [filter, setFilter] = useState([]);
  let filterArray: any = [];

  // 버튼 클릭 시 클래스네임과 value 값으로 필터링 및 토글 효과 생성
  const handleClick = (value: string) => {
    const filterClass = document.getElementsByClassName(value);
    if (filterClass[0].classList.contains('Here') === false) {
      filterClass[0].classList.add('Here');
      if (value === '무료') {
        filterArray.push({ enroll_type: 0, is_free: true });
        setFilter(filterArray && filterArray);
      } else if (value === '유료') {
        filterArray.push({ enroll_type: 0, is_free: false });
        setFilter(filterArray && filterArray);
      }
    } else {
      filterClass[0].classList.remove('Here');
      setFilter([]);
    }
  };

  useEffect(() => {
    onFilter(filter);
  }, [filter, onFilter]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 'none', borderRadius: 0, marginBottom: 3 }}
      >
        <Table>
          <TableBody>
            {LIST.map((element, index: number) => (
              <Row key={index}>
                <Title>{element}</Title>
                <Data>
                  {FILTER[index].map((name, i) => (
                    <Filter
                      onClick={() => handleClick(name)}
                      clickable
                      key={i}
                      className={name}
                      label={name}
                    />
                  ))}
                </Data>
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const Row = styled(TableRow)`
  height: 18px;
  border: 1px solid #e1e2e3;
`;

const Title = styled(TableCell)`
  width: 64px;
  font-size: 12px;
  color: #5e5f61;
  font-weight: 700;
  padding: 14px 16px;
  letter-spacing: 0.5px;
  background-color: #f9fafc;
  border-right: 1px solid #e0e0e0;
`;

const Data = styled(TableCell)`
  padding: 0 16px;
`;

const Filter = styled(Chip)`
  color: gray;
  font-size: 14px;
  margin: 8px 20px 8px 0;
  background-color: #f0f1f3;
`;
