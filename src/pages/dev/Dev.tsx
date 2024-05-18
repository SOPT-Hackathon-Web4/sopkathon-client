import { Input } from '@components';
import styled from '@emotion/styled';
import { QuizBox } from '@components';

const Dev = () => {
  return (
    <DevWrapper>
      <div style={{ width: '20rem' }}>{/* 버튼 컴포넌트 */}</div>
      <div style={{ width: '20rem' }}>
        <Input placeholder="입력하세요" value="" isError={true} errorMessage="비밀번호가 틀렸습니다!" />
      </div>
      <div>
        {/* 퀴즈박스 컴포넌트 */}
        <QuizBox></QuizBox>
      </div>
    </DevWrapper>
  );
};

export default Dev;

const DevWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray02};
`;
