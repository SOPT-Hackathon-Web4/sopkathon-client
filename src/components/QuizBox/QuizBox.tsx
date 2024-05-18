import styled from '@emotion/styled';
import { useState } from 'react';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface QuizBoxProps {
  quizNum?: number;
  title?: string;
  labelLeft?: string;
  labelRight?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: SerializedStyles;
}

const QuizBox = ({ quizNum, title, labelLeft, labelRight, onClick = () => {} }: QuizBoxProps) => {
  return (
    <QuizBoxContainer>
      <TextContainer>
        Q{quizNum}. {title}
      </TextContainer>
      <BtnContainer>
        <QuizBtn className={`button`} onClick={() => alert('Left Click!!')}>
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
