// import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizBox, Button } from '@components';
import { QUIZ_DATA } from 'src/constants/quizData';

const MyPage = () => {
  const isCheck = [true, true, true, true, true, true, true, true];

  // 서버에서 이 부분을 받아야 함
  const arr = [
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
  ];

  return (
    <MyPageWrapper>
      <Header>마이페이지</Header>
      <DropDownContainer>나와 거리가 0인 사람</DropDownContainer>
      <QuizBoxesContainer>
        {QUIZ_DATA?.map((item, idx) => (
          <QuizBox
            quizNum={idx + 1}
            title={item.title}
            labelLeft={item.labelLeft}
            labelRight={item.labelRight}
            isCheck={isCheck[idx]}
            active={arr[idx].answer}></QuizBox>
        ))}
      </QuizBoxesContainer>
      <Button
        label="퀴즈 없애기"
        onClick={() => alert('Click!!')}
        customStyle={css`
          width: 28rem;
          margin-top: 2.4rem;
          padding: 1.4rem 9.4rem;
          margin: 2.4rem 4.8rem 10rem 4.8rem;
        `}
        isActivated={false}></Button>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  width: 100%;

  align-items: center;
`;

const Header = styled.header`
  display: flex;
  position: fixed;
  align-items: center;

  margin-bottom: 1.6rem;
  padding: 1.2rem 1.6rem 1.2rem;
  width: 37.5rem;
  top: 0;

  background: #fff;

  font-family: ${({ theme }) => theme.font.body1};

  z-index: 1;
  box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.05);
`;

const DropDownContainer = styled.button`
  display: flex;
  align-items: center;

  padding: 1.4rem 9.4rem;
  margin: 7rem 4.8rem 1.6rem 4.8rem;

  border: 0.2rem solid;
  border-radius: 1rem;
`;

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  margin-top: 1.6rem;

  gap: 1.6rem;
`;
