import styled from "styled-components";

export const WrapperLayout = styled.div`
  width: 80%;
  ${(props) => props.borderPosition}: ${(props) => props.border};
  height: 10vh;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  margin: 0 auto;
`;

export const WrapperPage = styled.div``;

export const WrapperContainer = styled.div``;

export const WrapperAbout = styled.div``;
