import { Button, Input } from '@components';
import styled from '@emotion/styled';
import { useState } from 'react';

interface PasswordInputProps {
  onNext: VoidFunction;
}

const PasswordInput = (props: PasswordInputProps) => {
  const { onNext } = props;
  const [password, setPassword] = useState('');
  return (
    <>
      <TitleWrapper>
        <Title>비밀번호 입력해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <Input value={password} />
      </InputWrapper>
      <ButtonWrapper>
        <Button label="다음" onClick={onNext} />
      </ButtonWrapper>
    </>
  );
};

export default PasswordInput;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 2.6rem;
  margin-top: 2.4rem;
  gap: 0.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6.7rem;
  margin-left: 1.6rem;
  width: 28rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 28rem;
  margin: 3.2rem;
`;
