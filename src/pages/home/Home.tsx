import { Button } from '@components';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <HomeWrapper>
      Home
      <Button />
      <div> {import.meta.env.VITE_API_URL}</div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray02};
`;
