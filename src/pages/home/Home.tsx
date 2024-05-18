import styled from '@emotion/styled';
import StartButton from './components/StartButton/StartButton';
import { Generators } from '@styles/generator';
import { getMember } from '@apis/member';

const Home = () => {
  return (
    <HomeWrapper>
      <WelcomeH1>투제로에 온 것을 환영해요!</WelcomeH1>
      <MainImage src="https://via.placeholder.com/200" alt="메인 페이지 소개" />
      <MainButtons>
        <StartButton descriptionLabel="처음 왔나요?" buttonLabel="투제로 시작하기" onClick={() => getMember('1')} />
        <StartButton descriptionLabel="이미 계정이 있나요?" buttonLabel="투제로 계속하기" />
      </MainButtons>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray02};
  ${Generators.flexGenerator('column', 'center', 'center')};
  padding: 2.4rem 1.6rem 3.2rem;
`;

const WelcomeH1 = styled.h1`
  margin-top: 2.8rem;

  font-size: 24px;
  font-weight: 700;
`;

const MainImage = styled.img`
  margin-top: 6.7rem;
  margin-bottom: 5.2rem;
`;

const MainButtons = styled.section`
  width: 100%;
  ${Generators.flexGenerator('column')};
  gap: 1.6rem;
`;
