import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 80%;
  border-bottom: 2px solid black;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const WrapperFooter = styled.div`
  width: 80%;
  border-top: 2px solid black;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const WrapperPage = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const WrapperContainer = styled.div`
  width: 100%%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const WrapperCard = styled.div`
  height: 40%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
  border-radius: 40px;
`;

export const CardPara = styled.p`
  width: 80%;
  text-align: center;
`;

export const WrapperAbout = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const AboutPara = styled.p`
  width: 40%;
  height: 80%;
  text-align: center;
`;
