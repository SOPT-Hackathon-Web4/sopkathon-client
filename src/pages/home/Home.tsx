import styled from '@emotion/styled';
import StartButton from './components/StartButton/StartButton';
import { Generators } from '@styles/generator';
import { getMember } from '@apis/member';
import { IcMainIcon } from '@assets/svg';

const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeH1>투제로에 온 것을 환영해요!</WelcomeH1>
      <IcMainIcon width={'20rem'} style={{ marginTop: '6.7rem', marginBottom: '5.2rem' }} />
      <MainButtons>
        <StartButton descriptionLabel="처음 왔나요?" buttonLabel="투제로 시작하기" onClick={() => getMember('1')} />
        <StartButton color="primary2" descriptionLabel="이미 계정이 있나요?" buttonLabel="투제로 계속하기" />
      </MainButtons>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
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
