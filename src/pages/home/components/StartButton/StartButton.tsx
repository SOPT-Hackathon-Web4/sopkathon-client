import styled from '@emotion/styled';
import { Generators } from '@styles/generator';

export interface StartButtonProps {
  descriptionLabel: string;
  buttonLabel: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StartButton = ({ descriptionLabel, buttonLabel, onClick = () => {} }: StartButtonProps) => {
  return (
    <StartButtonContainer className={`start-button`} onClick={onClick}>
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
  padding: 1.2rem 0;
`;

const DescriptionSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;

const ButtonSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;
