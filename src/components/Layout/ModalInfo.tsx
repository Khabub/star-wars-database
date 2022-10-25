import styled from "styled-components";
import Modal from "../UI/Modal";

interface Props {
  title: string;
}


const ModalInfo = (props: Props) => {
  return (
    <Modal>
     
        <H1>{props.title}</H1>
     
    </Modal>
  );
};

export default ModalInfo;

const H1 = styled.h1`
  color: orange;
`;
