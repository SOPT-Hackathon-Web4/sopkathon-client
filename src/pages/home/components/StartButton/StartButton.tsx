import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export interface StartButtonProps {
  color?: string;
  descriptionLabel: string;
  buttonLabel: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StartButton = ({ color = 'primary1', descriptionLabel, buttonLabel, onClick = () => {} }: StartButtonProps) => {
  return (
    <StartButtonContainer color={color} className={`start-button`} onClick={onClick}>
      <DescriptionSpan>{descriptionLabel}</DescriptionSpan>
      <ButtonSpan>{buttonLabel}</ButtonSpan>
    </StartButtonContainer>
  );
};

export default StartButton;

const StartButtonContainer = styled.button`
  width: 100%;
  height: 8rem;
  ${Generators.flexGenerator('column', 'center', 'center')};
  gap: 1rem;
  padding: 1.6rem 0;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  ${({ color, theme }) => `border-color: ${color === 'primary1' ? theme.color.primary1 : theme.color.primary2}`};
`;

const DescriptionSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;

const ButtonSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;
