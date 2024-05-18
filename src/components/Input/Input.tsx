import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { SerializedStyles } from '@typings/commonType';

export interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  isError?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: SerializedStyles;
}

export interface InputContainerProps {
  customStyle?: SerializedStyles;
}

const Input = ({
  type = 'text',
  placeholder,
  value,
  isError,
  errorMessage,
  onChange = () => {},
  customStyle = css``,
  ...props
}: InputProps) => {
  return (
    <InputContainer className={`input`} customStyle={customStyle}>
      <CommonInput type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} />
      {isError && <ErrorSpan>{errorMessage}</ErrorSpan>}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  ${Generators.flexGenerator('column', 'center', 'flex-start')};

  ${(props) => props.customStyle}
`;

const CommonInput = styled.input`
  width: 100%;
  height: 3rem;
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 1.2rem;
`;
