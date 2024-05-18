import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface QuizBoxProps {
  idx?: number;
  title?: string;
  labelLeft?: string;
  labelRight?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: SerializedStyles;
}

const QuizBox = ({ idx, title, labelLeft, labelRight, onClick = () => {} }: QuizBoxProps) => {
  return (
    <QuizBoxContainer>
      <TextContainer>
        Q{idx}. {title}
      </TextContainer>
      <BtnContainer>
        <QuizBtn className={`button`} onClick={onClick}>
          {labelLeft}
        </QuizBtn>
        <QuizBtn className={`button`} onClick={onClick}>
          {labelRight}
        </QuizBtn>
      </BtnContainer>
    </QuizBoxContainer>
  );
};

export default QuizBox;

const QuizBoxContainer = styled.section`
  width: 100%;
  height: 16rem;

  border: 0.1rem solid;
  border-radius: 1rem;
`;

const TextContainer = styled.section`
  display: flex;

  padding: 2rem;
`;

const BtnContainer = styled.section`
  display: flex;

  padding: 0 2rem;
  gap: 2.4rem;
`;

const QuizBtn = styled.button`
  ${Generators.flexGenerator()};

  width: 14rem;

  padding: 2.5rem 0;

  border: 0.1rem solid;
  border-radius: 1rem;
`;
