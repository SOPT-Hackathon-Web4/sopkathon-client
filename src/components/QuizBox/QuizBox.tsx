import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface QuizBoxProps {
  quizNum?: number;
  title?: string;
  labelLeft?: string;
  labelRight?: string;
  idx?: number;
  handleClickLeft?: (idx: number) => void;
  handleClickRight?: (idx: number) => void;
  active?: boolean;
  isCheck?: boolean;
  customStyle?: SerializedStyles;
}

const QuizBox = ({
  quizNum,
  title,
  labelLeft,
  labelRight,
  idx,
  handleClickLeft = () => {},
  handleClickRight = () => {},
  isCheck,
  active,
}: QuizBoxProps) => {
  return (
    <QuizBoxContainer>
      <TextContainer>
        Q{quizNum}. {title}
      </TextContainer>
      <BtnContainer>
        <QuizBtn
          style={isCheck && active ? { backgroundColor: '#FFC4E0' } : {}}
          name="left"
          className={`left`}
          onClick={() => handleClickLeft(idx!)}>
          {labelLeft}
        </QuizBtn>
        <QuizBtn
          style={isCheck && !active ? { backgroundColor: '#FFC4E0' } : {}}
          name="right"
          className={`right`}
          onClick={() => handleClickRight(idx!)}>
          {labelRight}
        </QuizBtn>
      </BtnContainer>
    </QuizBoxContainer>
  );
};

export default QuizBox;

const QuizBoxContainer = styled.section`
  /* 페이지 단에서 gap 주는 거 잊지 말기!  */
  width: 100%;
  height: 16rem;

  border: 0.2rem solid;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.color.gray02};
`;

const TextContainer = styled.section`
  display: flex;

  margin: 2rem;

  font-family: ${({ theme }) => theme.font.body2};
`;

const BtnContainer = styled.section`
  display: flex;

  margin: 1.95rem;
  gap: 2.4rem;

  background-color: ${({ theme }) => theme.color.white};
`;

const QuizBtn = styled.button`
  ${Generators.flexGenerator()};

  width: 14rem;

  padding: 2.5rem 0;

  border: 0.2rem solid;
  border-radius: 2rem;
  border-color: ${({ theme }) => theme.color.primary1};

  background-color: white;

  font-family: ${({ theme }) => theme.font.body1};
  color: ${({ theme }) => theme.color.gray06};
`;
