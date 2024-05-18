import styled from '@emotion/styled';
import { QuizBox } from '@components';

const CreateQuiz = () => {
  const dummyData = [{ title: '내가 좀 더 좋아하는 음식은...', labelLeft: '치킨', labelRight: '피자' }];

  return (
    <CreateQuizWrapper>
      <Header>본인의 취향을 선택해 주세요.</Header>
      <QuizBoxesContainer>
        {dummyData?.map((item, idx) => (
          <QuizBox quizNum={idx + 1} title={item.title} labelLeft={item.labelLeft} labelRight={item.labelRight}></QuizBox>
        ))}
        <QuizBox></QuizBox>
      </QuizBoxesContainer>
    </CreateQuizWrapper>
  );
};

export default CreateQuiz;

const CreateQuizWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray02};
`;

const Header = styled.header`
  display: inline-flex;
  align-items: center;

  margin-bottom: 1.6rem;
  padding: 1.2rem 1.6rem 1.2rem;
  width: 100%;

  border: 0.1rem solid black;

  font-size: 2rem;
`;

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;

  gap: 1.6rem;
`;
