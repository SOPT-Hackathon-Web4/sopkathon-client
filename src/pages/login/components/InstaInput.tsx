import { Button } from '@components';
import styled from '@emotion/styled';

interface InstaInputProps {
  onNext: VoidFunction;
}

const InstaInput = (props: InstaInputProps) => {
  const { onNext } = props;
  return (
    <>
      <TitleWrapper>
        <Title>인스타그램 아이디를</Title>
        <Title>입력해주세요!</Title>
      </TitleWrapper>
      <ButtonWrapper>
        <Button label="다음" onClick={onNext} />
      </ButtonWrapper>
    </>
  );
};

export default InstaInput;

const Title = styled.h1`
  font-size: 2.4rem;
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
  background-color: pink;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0 1.5rem 0;
  width: 28rem;
  margin-top: 3.2rem;
`;
