import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

import "../fonts/InriaSans-Regular.ttf";
import seatedPerson from "../assets/landing-page-person.svg";
import CircularButton from "../components/CircularButton";

const Container = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
`;

const GreenBackground = styled.div`
  background-color: rgb(119, 234, 144, 40%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 40vh;
  margin-left: 10%;
  margin-right: 10%;
`;

const WelcomeText = styled.p`
  font-size: 50px;
`;

const SeatedPersonImg = styled.img`
  position: absolute;
  left: 0;
  margin-top: 10%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default function Landing(props: RouteComponentProps) {
  return (
    <Container>
      <GreenBackground>
        <WelcomeText>Welcome</WelcomeText>
        <SeatedPersonImg
          src={seatedPerson}
          height={400}
          width={400}
          alt="young man sitting on the chair and drinking coffee"
        />
      </GreenBackground>

      <ButtonContainer>
        <CircularButton primaryText="Touch" secondaryText="To start" />
      </ButtonContainer>
    </Container>
  );
}
