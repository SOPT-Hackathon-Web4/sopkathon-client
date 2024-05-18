import { Button, Input } from '@components';
import styled from '@emotion/styled';

interface PasswordInputProps {
  onNext: VoidFunction;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = (props: PasswordInputProps) => {
  const { onNext, password, onChange } = props;
  const isActivated = password.length > 0;

  return (
    <>
      <TitleWrapper>
        <Title>비밀번호 입력해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <Input value={password} onChange={onChange} />
      </InputWrapper>
      <ButtonWrapper>
        <Button label="다음" onClick={onNext} isActivated={isActivated} />
      </ButtonWrapper>
    </>
  );
};

export default PasswordInput;

const Title = styled.h1`
  font-size: 2.4rem;
  ${({ theme }) => theme.font.head1};
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
