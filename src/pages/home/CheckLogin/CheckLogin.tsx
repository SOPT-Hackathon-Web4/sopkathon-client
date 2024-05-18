import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { Button, Input } from '@components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckLogin = () => {
  const [name, setName] = useState('');
  const [insta, setInsta] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeInsta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInsta(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <CheckLoginWrapper>
      <H1>김가연님의 퀴즈에 도전하시겠어요?</H1>
      <Form>
        <Label>이름</Label>
        <Input value={name} onChange={handleChangeName} />
        <Label>인스타</Label>
        <Input value={insta} onChange={handleChangeInsta} />
        <ButtonWrapper>
          <Button
            label="도전!"
            style={{ backgroundColor: '#FFC4E0' }}
            isActivated={false}
            onClick={() => navigate('/solve-quiz')}
          />
        </ButtonWrapper>
      </Form>

      <ResultFooter>
        <FooterText>내 퀴즈를 확인하고 싶으신가요?</FooterText>
        <FooterLink onClick={() => navigate('/login/mypage')}>확인하러 가기</FooterLink>
      </ResultFooter>
    </CheckLoginWrapper>
  );
};

export default CheckLogin;

const CheckLoginWrapper = styled.div`
  width: 100%;
  ${Generators.flexGenerator('column', 'center', 'center')};
  padding: 8.7rem 1.6rem 3rem;

  background-image: url('svg/ic_background.svg');
`;

const H1 = styled.h1`
  margin-top: 2.8rem;

  ${({ theme }) => theme.font.head1};
`;

const Form = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const Label = styled.div`
  ${({ theme }) => theme.font.body3};
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 4.8rem;
  margin-bottom: 11.8rem;
`;

const ResultFooter = styled.section`
  ${Generators.flexGenerator('column', 'center', 'center')};
`;

const FooterText = styled.p`
  ${({ theme }) => theme.font.body3};
  margin-bottom: 0.9rem;
`;

const FooterLink = styled.a`
  ${({ theme }) => theme.font.body3};
  cursor: pointer;
  text-decoration: underline;
`;
