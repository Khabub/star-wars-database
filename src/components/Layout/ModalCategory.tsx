import styled from "styled-components";

// Containers
export const ContainerBigger = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  overflow-y: scroll;

  @media (min-width: 599px) {
    width: 90vw;

    .description {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      text-align: start;
      margin: 0.5rem 1rem;
    }

    .crawlhide {
      display: none;
    }
  }
`;

// Headline
export const H1 = styled.h1`
  :first-child {
    margin-bottom: 0.8rem;
  }
  color: #2197db;
  margin: 0.6rem 0 0 0;
  padding: 0;
  font-size: 1.1rem;
`;

// Types
export const H2 = styled.h2`
  :first-child {
    margin: 0;
  }
  color: #85510e;
  margin: 0.6rem 0 0 0;
  padding: 0;
  font-size: 0.9rem;

  @media (min-width: 599px) {
    flex-grow: 0;
    flex-basis: 24%;
  }
`;

// Values
export const P = styled.p`
  color: #ebc889;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;

  @media (min-width: 599px) {
    flex-grow: 0;
    flex-basis: 24%;    
  }
`;
