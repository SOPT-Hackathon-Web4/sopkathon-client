import styled from '@emotion/styled';

const Dev = () => {
  return (
    <DevWrapper>
      <div style={{ width: '20rem' }}>{/* 버튼 컴포넌트 */}</div>
      <div style={{ width: '20rem' }}>{/* 인풋 컴포넌트 */}</div>
      <div style={{ width: '20rem' }}>{/* 퀴즈박스 컴포넌트 */}</div>
    </DevWrapper>
  );
};

export default Dev;

const DevWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray02};
  gap: 2rem;
`;
