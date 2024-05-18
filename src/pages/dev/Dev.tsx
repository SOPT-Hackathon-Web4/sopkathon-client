import { Button } from '@components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Dev = () => {
  return (
    <DevWrapper>
      Dev
      <div style={{ width: '20rem' }}>
        <Button label="기본버튼" onClick={() => alert('click!!')} />
        <Button
          label="커스텀 스타일 추가 가능"
          onClick={() => alert('Click!!')}
          customStyle={css`
            background-color: red;
          `}
        />
      </div>
      <div> {import.meta.env.VITE_API_URL}</div>
    </DevWrapper>
  );
};

export default Dev;

const DevWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray02};
`;
