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

const LIST = ['유형', '진행 방식', '분야', '난이도', '언어', '가격'];

export default function Category() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 'none', borderRadius: 0, marginBottom: 3 }}
      >
        <Table>
          <TableBody>
            {LIST.map((element, index) => (
              <Row key={index}>
                <Title>{element}</Title>
                <Data>
                  <Chip label="hello" />
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
  background-color: #f9fafc;
  width: 64px;
  color: #5e5f61;
  font-size: 12px;
  font-weight: 700;
  padding: 14px 16px;
  letter-spacing: 0.5px;
  border-right: 1px solid #e0e0e0;
`;

const Data = styled(TableCell)`
  padding: 8px 16px;
`;
