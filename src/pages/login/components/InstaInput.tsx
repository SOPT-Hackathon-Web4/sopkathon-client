import { Button, Input } from '@components';
import styled from '@emotion/styled';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

interface InstaInputProps {
  onNext: VoidFunction;
  instaValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InstaInput = (props: InstaInputProps) => {
  const { onNext, instaValue, onChange } = props;

  const isActivated = instaValue.length > 0;
  // const navigate = useNavigate();

  // const checkInstagramId = async () => {
  //   try {
  //     /**@todo 정안 api 바꾸기 */

  //     const response = await axios.get(`/your-api-endpoint?instaId=${instaValue}`);
  //     if (response.data === true) {
  //       onNext();
  //     } else {
  //       /**@todo 정안 api 바꾸기 */
  //       navigate('/some-other-page');
  //     }
  //   } catch (error) {
  //     console.error('Error checking Instagram ID:', error);
  //   }
  // };

  return (
    <>
      <LoginPageWrapper>
        <TitleWrapper>
          <Title>인스타그램 아이디를</Title>
          <Title>입력해주세요!</Title>
        </TitleWrapper>
        <InputWrapper>
          <Input value={instaValue} onChange={onChange} />
        </InputWrapper>
        <ButtonWrapper>
          <Button label="다음" onClick={onNext} isActivated={isActivated} />
        </ButtonWrapper>
      </LoginPageWrapper>
    </>
  );
};

export default InstaInput;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 1.6rem;
  margin-top: 4.1rem;
  width: 28rem;
  /* background: ${({ theme }) => theme.color.sub2}; */
`;

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  width: 28rem;
  margin: 3.2rem;
`;

const LoginPageWrapper = styled.section`
  background: ${({ theme }) => theme.color.sub2};
`;
