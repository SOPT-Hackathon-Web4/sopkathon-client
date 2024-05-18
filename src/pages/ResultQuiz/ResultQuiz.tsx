import styled from '@emotion/styled';
import { Generators } from '@styles/generator';
import { Button } from '@components';
import { IcResultImg } from '@assets/svg';

const ResultQuiz = () => {
  return (
    <ResultQuizWrapper>
      <H1>김가연 님과 나의 거리</H1>
      <DistanceWrapper>
        <DistanceNumber>{`0`}</DistanceNumber>
        <DistanceKm>{`km`}</DistanceKm>
        <IcResultImg width={'10.3rem'} height={'16rem'} />
      </DistanceWrapper>
      <ResultText>김가연 님에게</ResultText>
      <ResultText>나의 이름과 인스타가 전송되었어요</ResultText>
      <ResultText>두근두근!</ResultText>
      <ResultButtons>
        <ButtonWrapper>
          <Button label="나도 만들어볼까?" isActivated={false} />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button label="내꺼 확인하러 갈까?" isActivated={false} />
        </ButtonWrapper>
      </ResultButtons>
    </ResultQuizWrapper>
  );
};

export default ResultQuiz;

const ResultQuizWrapper = styled.div`
  width: 100%;
  ${Generators.flexGenerator('column', 'center', 'center')};
  padding: 8.7rem 1.6rem 9.4rem;

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
  margin-bottom: 2.7rem;
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
