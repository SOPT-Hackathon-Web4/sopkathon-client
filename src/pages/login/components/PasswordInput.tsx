import { Button } from '@components';
import styled from '@emotion/styled';

interface PasswordInputProps {
  onNext: VoidFunction;
}

const PasswordInput = (props: PasswordInputProps) => {
  const { onNext } = props;
  return (
    <>
      <TitleWrapper>
        <Title>비밀번호 입력해주세요.</Title>
      </TitleWrapper>
      <Input />
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

const Input = styled.input`
  width: 34.3rem;
  margin-top: 6.7rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: pink;
  padding: 1.4rem 0 1.5rem 0;
  width: 28rem;
  margin-top: 3.2rem;
`;
