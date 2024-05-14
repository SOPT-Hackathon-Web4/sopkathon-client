import styled from '@emotion/styled';
import { getArticle } from '@apis/article';

const Button = () => {
  return (
    <CommonButton
      onClick={async () => {
        const response = await getArticle(1);
        console.log(response);
      }}>
      Click me
    </CommonButton>
  );
};

export default Button;

const CommonButton = styled.button`
  width: 10rem;
  height: 5rem;
`;
