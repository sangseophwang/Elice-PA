import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

interface HeaderProps {
  type: number;
  free: boolean;
  title: string;
  description: string;
}

export default function Header({
  type,
  free,
  title,
  description,
}: HeaderProps) {
  const handleLabel = () => {
    if (type === 0 && free === true) return '무료';
    else if (type === 0 && free === false) return '유료';
    else if (type === 4 && free === true) return '구독';
    else return '준비중';
  };
  return (
    <>
      <CourseLabel>{handleLabel()}</CourseLabel>
      <CourseTitleBox>
        <CourseTitle>{title}</CourseTitle>
      </CourseTitleBox>
      <CourseDescriptionBox>
        <CourseDescription>{description}</CourseDescription>
      </CourseDescriptionBox>
    </>
  );
}

const CourseLabel = styled(Typography)`
  font-size: 12px;
  margin-top: 4px;
  color: #524fa1;
  font-weight: bold;
`;

const CourseTitleBox = styled(Box)`
  height: 56px;
  margin-bottom: 8px;
`;

const CourseTitle = styled(Typography)`
  font-size: 18px;
  overflow: hidden;
  margin-top: 10px;
  line-height: 1.6;
  font-weight: bold;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

const CourseDescriptionBox = styled(Box)`
  height: 40px;
`;

const CourseDescription = styled(Typography)`
  height: 40px;
  font-size: 14px;
  color: #5e5f61;
  overflow: hidden;
  line-height: 1.6;
  display: -webkit-box;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;
