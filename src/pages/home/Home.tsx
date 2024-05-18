import styled from '@emotion/styled';

const Home = () => {
  return <HomeWrapper>Home</HomeWrapper>;
};

export default Home;

const HomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray02};
`;
