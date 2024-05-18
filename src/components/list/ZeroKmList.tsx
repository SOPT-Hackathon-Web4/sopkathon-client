import styled from '@emotion/styled';

// const ZERO_KM_DATA = [
// {},
// { instaId: '@exceptanyone' },
// { instaId: '@ry_u.ts' },
// { instaId: '@d_awnw' },
// { instaId: '@haeun_rho' },
// { instaId: '@seoyeoan_ov' },
// ];

const ZeroKmList = () => {
  return (
    <ZeroKimListWrapper>
      <Section>
        <Text>나와 거리가 0km인 사람</Text>
      </Section>
      {/* {ZERO_KM_DATA.map((data, index) => (
        <Section key={index}>
          <Text>투제로</Text>
          <Text>{data.instaId}</Text>
        </Section>
      ))} */}
    </ZeroKimListWrapper>
  );
};

export default ZeroKmList;

const ZeroKimListWrapper = styled.section`
  width: 34.3rem;
  margin-left: 1.6rem;
  border-radius: 10px;
  border: 2px solid var(--gray2_E6E6E6, #e6e6e6);
  background: var(--white_FFFFFF, #fff);
  margin-top: 6rem;
`;

const Section = styled.article`
  display: flex;
  width: 30.3rem;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 3px solid ${({ theme }) => theme.color.gray01};
  margin-left: 2rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body2};
`;
