import { Button, Input } from '@components';
import styled from '@emotion/styled';
import { useState } from 'react';

interface InstaInputProps {
  onNext: VoidFunction;
}

const InstaInput = (props: InstaInputProps) => {
  const { onNext } = props;
  const [instaValue, setInstaValue] = useState('');

  return (
    <>
      <TitleWrapper>
        <Title>인스타그램 아이디를</Title>
        <Title>입력해주세요!</Title>
      </TitleWrapper>
      <InputWrapper>
        <Input value={instaValue} />
      </InputWrapper>
      <ButtonWrapper>
        <Button label="다음" onClick={onNext} />
      </ButtonWrapper>
    </>
  );
};

export default InstaInput;

/**@todo 태승이가 만들어준 input으로 변경 */

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 1.6rem;
  margin-top: 4.1rem;
  width: 28rem;
`;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 28rem;
  margin: 3.2rem;
`;
