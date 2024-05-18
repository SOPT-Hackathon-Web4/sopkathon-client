import { Input } from '@components';
import styled from '@emotion/styled';

const Dev = () => {
  return (
    <DevWrapper>
      <div style={{ width: '20rem' }}>{/* 버튼 컴포넌트 */}</div>
      <div>
        <Input placeholder="입력하세요" value="" isError={true} errorMessage="비밀번호가 틀렸습니다!" />
      </div>
      <div style={{ width: '20rem' }}>{/* 퀴즈박스 컴포넌트 */}</div>
    </DevWrapper>
  );
};

export default Dev;

const DevWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray02};
  gap: 2rem;
  padding: 0 1.6rem;
`;
