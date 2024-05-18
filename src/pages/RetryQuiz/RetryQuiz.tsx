import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { Button } from '@components';
import { IcRetryImg } from '@assets/svg';

const RetryQuiz = () => {
  return (
    <RetryQuizWrapper>
      <H1>김가연 님과 나의 거리</H1>
      <DistanceWrapper>
        <DistanceNumber>{`8`}</DistanceNumber>
        <DistanceKm>{`km`}</DistanceKm>
        <IcRetryImg width={'10.3rem'} height={'16rem'} />
      </DistanceWrapper>
      <ResultText>우리 사이 아직 조금 멀다...</ResultText>
      <ResultText>더 가까이 다가가볼까요?</ResultText>
      <ResultButtons>
        <ButtonWrapper>
          <Button label="재도전!" isActivated={false} />
        </ButtonWrapper>
      </ResultButtons>
      <ResultFooter>
        <FooterText>내 투제로는 어떨까?</FooterText>
        <FooterLink>로그인/회원가입</FooterLink>
      </ResultFooter>
    </RetryQuizWrapper>
  );
};

export default RetryQuiz;

const RetryQuizWrapper = styled.div`
  width: 100%;
  ${Generators.flexGenerator('column', 'center', 'center')};
  padding: 8.7rem 1.6rem 3rem;

  background-image: url('svg/ic_background.svg');
`;

const H1 = styled.h1`
  margin-top: 2.8rem;

  ${({ theme }) => theme.font.head1};
`;

const DistanceWrapper = styled.div`
  margin-right: 2.4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 4.4rem;
`;

const DistanceNumber = styled.p`
  ${({ theme }) => theme.font.title};
`;

const DistanceKm = styled.p`
  ${({ theme }) => theme.font.head1};
  margin-left: 0.8rem;
  margin-right: 1.6rem;
`;

const ResultText = styled.p`
  ${({ theme }) => theme.font.body2};
`;

const ResultButtons = styled.section`
  width: 100%;
  ${Generators.flexGenerator()};
  gap: 2rem;
  margin-top: 5.05rem;
`;

const ButtonWrapper = styled.div`
  width: 16rem;

  & > button {
    background-color: ${({ theme }) => theme.color.sub1};
  }
`;

const ResultFooter = styled.section`
  ${Generators.flexGenerator('column', 'center', 'center')};
  margin-top: 3rem;
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
