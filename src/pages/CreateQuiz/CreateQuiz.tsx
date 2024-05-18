import styled from '@emotion/styled';
import { QuizBox } from '@components';

const CreateQuiz = () => {
  return (
    <CreateQuizWrapper>
      <Header>본인의 취향을 선택해 주세요.</Header>
      <QuizBoxesContainer>
        <QuizBox></QuizBox>
      </QuizBoxesContainer>
    </CreateQuizWrapper>
  );
};

export default CreateQuiz;

const CreateQuizWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray02};

  /* 태승 오빠가 메인에서 padding 줬으므로 develop 올릴 때는 제거하기 */
  padding: 0 1.6rem;
`;

const Header = styled.header`
  display: inline-flex;
  align-items: center;

  width: 100%;
  padding-left: 1.6rem;

  border: 0.1rem solid black;
`;

const QuizBoxesContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;
