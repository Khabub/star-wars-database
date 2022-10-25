import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  name: string;
  onEnter?: () => void;
  onLeave?: () => void;
}

const Button = (props: Props) => {
  return (
    <StyledButton onMouseEnter={props.onEnter} onMouseLeave={props.onLeave}>
      {props.name}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 150px;
  padding: 0.2rem;
  margin: 0.1rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    color: #007d81;
  }
`;
