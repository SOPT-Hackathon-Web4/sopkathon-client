import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizBox, Button } from '@components';
import { QUIZ_DATA } from 'src/constants/quizData';

const CreateQuiz = () => {
  return (
    <CreateQuizWrapper>
      <Header>본인의 취향을 선택해 주세요.</Header>
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
        label="퀴즈 생성하기"
        onClick={() => alert('Click!!')}
        customStyle={css`
          width: 28rem;
          margin-top: 2.4rem;
          padding: 1.4rem 9.4rem;
          margin: 2.4rem 4.8rem 10rem 4.8rem;
        `}
        isActivated={true}></Button>
    </CreateQuizWrapper>
  );
};

export default CreateQuiz;

const CreateQuizWrapper = styled.div`
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

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  margin-top: 5rem;

  gap: 1.6rem;
`;
