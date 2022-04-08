import React from "react";
import styled from "styled-components";
// import { feather } from "feather-icons";
import FeatherIcon from "feather-icons-react";

const Home = () => {
  return (
    <Container>
      <PseudoDiv>a</PseudoDiv>
      <CenterContainer>
        <Title>Find YOUr IdEAl Flatmate</Title>
        <Subtitle>Because every Joey deserves a Chandler</Subtitle>
        <Button>
          Take the quiz
          <FeatherIcon icon="arrow-up-right" />
        </Button>
      </CenterContainer>
      <WarningContainer>
        ⚠️ Moving in with the wrong flatmate could turn your life into hell! ⚠️
        Moving in with the wrong flatmate could turn your life into hell! ⚠️
        Moving in with the wrong flatmate could turn your life into hell! ⚠️
        Moving in with the wrong flatmate could turn your life into hell! ⚠️
        Moving in with the wrong flatmate could turn your life into hell! ⚠️
        Moving in with the wrong flatmate could turn your life into hell!
      </WarningContainer>
    </Container>
  );
};
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("pattern.svg");
  background-color: #f96d5f;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: 110px;
  color: #fff;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 4px 0 #000,
    1px 1px 0 #000;
  font-family: "Aberforth", sans-serif;
`;
const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  color: #cef44f;
`;
const Button = styled.button`
  border: none;
  background-color: #1a1a1a;
  padding: 15px 30px;
  color: #fff;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 21px;
  cursor: pointer;
`;
const WarningContainer = styled.div`
  background-color: #cef44f;
  width: 100vw;
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #1a1a1a;
  margin-bottom: 50px;
`;
const PseudoDiv = styled.div`
  visibility: hidden;
`;
export default Home;
