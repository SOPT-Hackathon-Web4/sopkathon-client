import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizBox, Button } from '@components';
import { QUIZ_DATA } from 'src/constants/quizData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SolveQuiz = () => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState([false, false, false, false, false, false, false, false]);

  const [arr, setArr] = useState([
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
    { answer: true },
  ]);

  const handleClickLeft = (idx: number) => {
    const newArr = [...arr];

    newArr[idx] = { ...newArr[idx], answer: true };

    setArr(newArr);

    const newIsCheck = [...isCheck];
    newIsCheck[idx] = true;
    setIsCheck(newIsCheck);
  };

  const handleClickRight = (idx: number) => {
    const newArr = [...arr];

    newArr[idx] = { ...newArr[idx], answer: false };

    setArr(newArr);

    const newIsCheck = [...isCheck];
    newIsCheck[idx] = true;
    setIsCheck(newIsCheck);
  };
  return (
    <SolveQuizWrapper>
      <Header>{}님의 취향을 맞춰 보세요.</Header>
      <QuizBoxesContainer>
        {QUIZ_DATA?.map((item, idx) => (
          <QuizBox
            quizNum={idx + 1}
            title={item.title}
            labelLeft={item.labelLeft}
            labelRight={item.labelRight}
            idx={idx}
            handleClickLeft={handleClickLeft}
            handleClickRight={handleClickRight}
            isCheck={isCheck[idx]}
            active={arr[idx].answer}></QuizBox>
        ))}
      </QuizBoxesContainer>
      <Button
        label="퀴즈 다 풀었다!"
        onClick={() => navigate('/result-quiz')}
        customStyle={css`
          width: 28rem;
          margin-top: 2.4rem;
          padding: 1.4rem 8rem;
          margin: 2.4rem 4.8rem 10rem 4.8rem;
        `}
        isActivated={true}></Button>
    </SolveQuizWrapper>
  );
};

export default SolveQuiz;

const SolveQuizWrapper = styled.div`
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
