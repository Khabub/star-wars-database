import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

const Backdrop = (props: Props) => {
  return <StyledBackdrop onClick={props.onClose}></StyledBackdrop>;
};

const Modal = (props: Props) => {
  const portal = document.getElementById("modalInfo") as HTMLElement;

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(<Container>{props.children}</Container>, portal)}
    </Fragment>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  background-color: #9c8e8e;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
