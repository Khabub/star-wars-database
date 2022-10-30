import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  name: string;
  onClick?: () => void;
  
}

const Button = (props: Props) => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 190px;
  padding: 0.2rem;
  margin: 0.1rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    color: #007d81;
  }
`;
