import { Button, Input } from '@components';
import styled from '@emotion/styled';

interface ExistingPasswordInputProps {
  onNext: VoidFunction;
  existingPassword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ExistingPasswordInput = (props: ExistingPasswordInputProps) => {
  const { onNext, existingPassword, onChange } = props;
  const isActivated = existingPassword.length > 0;
  return (
    <>
      <TitleWrapper>
        <Title>비밀번호 입력해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <Input type="password" value={existingPassword} onChange={onChange} />
      </InputWrapper>
      <ButtonWrapper>
        <Button label="회원가입하기" onClick={onNext} isActivated={isActivated} disabled={!isActivated} />
      </ButtonWrapper>
    </>
  );
};

export default ExistingPasswordInput;

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
