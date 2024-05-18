// import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizBox, Button } from '@components';
import { QUIZ_DATA } from 'src/constants/quizData';
import { useNavigate } from 'react-router-dom';
import ZeroKmList from 'src/components/list/ZeroKmList';

const MyPage = () => {
  const isCheck = [true, true, true, true, true, true, true, true];

    const arr = [
        { answer: true },
        { answer: false },
        { answer: true },
        { answer: true },
        { answer: false },
        { answer: true },
        { answer: false },
        { answer: false },
    ];

  const navigate = useNavigate();

  return (
    <MyPageWrapper>
      <Header>마이페이지</Header>
      {/* <DropDownContainer>나와 거리가 0인 사람</DropDownContainer> */}
      <ZeroKmList />
      <QuizBoxesContainer>
        {QUIZ_DATA?.map((item, idx) => (
          <QuizBox
            idx={idx}
            quizNum={idx + 1}
            title={item.title}
            labelLeft={item.labelLeft}
            labelRight={item.labelRight}
            isCheck={isCheck[idx]}
            active={arr[idx].answer}></QuizBox>
        ))}
      </QuizBoxesContainer>
        <div style={{
            width: '100%',
            marginTop: '2.4rem',
            padding: '1.6rem',
            display: 'flex',
            gap: '1rem',
        }}>

      <Button
        label="퀴즈 없애기"
        onClick={() => navigate('/')}
        isActivated={false}></Button>
        <Button
        label="링크 복사하기"
        onClick={() => navigate('/')}
        customStyle={css`
            background-color: #FFC4E0;
        `}
        isActivated={false}></Button>
        </div>

    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  width: 100%;

  align-items: center;
  background: ${({ theme }) => theme.color.sub2};
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

// const DropDownContainer = styled.button`
//   display: flex;
//   align-items: center;

//   padding: 1.4rem 9.4rem;
//   margin: 7rem 4.8rem 1.6rem 4.8rem;

//   border: 0.2rem solid;
//   border-radius: 1rem;
// `;

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
  margin-top: 1.6rem;

  gap: 1.6rem;
`;
