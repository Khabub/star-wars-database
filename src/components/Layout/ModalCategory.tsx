import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerBigger = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  overflow-y: scroll;  
`;

export const H1 = styled.h1`
:first-child {
    margin: 0;    
  }
  color: #2197db;
  margin: 0.6rem 0 0 0;
  padding: 0;
  font-size: 1.1rem;
`;

export const H2 = styled.h2`
  :first-child {
    margin: 0;    
  }
  color: #85510e;
  margin: 0.6rem 0 0 0;
  padding: 0;
  font-size: 1rem;
`;

export const P = styled.p`
  color: #ebc889;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`;
