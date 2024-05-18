import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizBox, Button } from '@components';
import { QUIZ_DATA } from 'src/constants/quizData';

const SolveQuiz = () => {
  return (
    <SolveQuizWrapper>
      <Header>{}님의 취향을 맞춰 보세요.</Header>
      <QuizBoxesContainer>
        {QUIZ_DATA?.map((item, idx) => (
          <QuizBox
            quizNum={idx + 1}
            title={item.title}
            labelLeft={item.labelLeft}
            labelRight={item.labelRight}></QuizBox>
        ))}
      </QuizBoxesContainer>
      <Button
        label="퀴즈 제출하기"
        onClick={() => alert('Click!!')}
        customStyle={css`
          width: 28rem;
          padding: 1.4rem 9.4rem;
          margin: 2.4rem 4.8rem 10rem 4.8rem;
          border-color: #ffc4e0;
        `}
        isActivated={false}></Button>
    </SolveQuizWrapper>
  );
};

export default SolveQuiz;

const SolveQuizWrapper = styled.div`
  width: 100%;

  align-items: center;
`;

const Header = styled.header`
  display: inline-flex;
  position: fixed;
  align-items: center;

  margin-bottom: 1.6rem;
  padding: 1.2rem 1.6rem 1.2rem;
  width: 100%;
  top: 0;

  border: 0.1rem solid black;

  background: #fff;

  font-family: ${({ theme }) => theme.font.body1};

  z-index: 1;
`;

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  margin-top: 5rem;

  gap: 1.6rem;
`;
