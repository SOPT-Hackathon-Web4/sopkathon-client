import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { getMember } from '@apis/member';
import { IcMainIcon } from '@assets/svg';

const RetryQuiz = () => {
  return (
    <RetryQuizWrapper>
      <WelcomeH1>투제로에 온 것을 환영해요!</WelcomeH1>
      <IcMainIcon width={'20rem'} style={{ marginTop: '6.7rem', marginBottom: '5.2rem' }} />
      <MainButtons></MainButtons>
    </RetryQuizWrapper>
  );
};

export default RetryQuiz;

const RetryQuizWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${Generators.flexGenerator('column', 'center', 'center')};
  padding: 2.4rem 1.6rem 3.2rem;

  background-image: url('svg/ic_background.svg');
`;

const WelcomeH1 = styled.h1`
  margin-top: 2.8rem;

  ${({ theme }) => theme.font.head1};
`;

const MainButtons = styled.section`
  width: 100%;
  ${Generators.flexGenerator('column')};
  gap: 1.6rem;
`;
