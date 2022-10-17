import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  name: string;
}

const Button = (props: Props) => {
  return <StyledButton>{props.name}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  width: 150px;
  padding: 0.2rem;
  margin: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`;
