import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import seatedPerson from "../assets/landing-page-person.svg";
import CircularButton from "../components/CircularButton";
import Header from "../components/Header";
import "../fonts/InriaSans-Regular.ttf";

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

export default function Landing() {
  const navigate = useNavigate();

  function onTouchToStart() {
    navigate("/qr");
  }

  return (
    <Container>
      <GreenBackground>
        <Header title="Welcome" />
        <SeatedPersonImg
          src={seatedPerson}
          height={400}
          width={400}
          alt="young man sitting on the chair and drinking coffee"
        />
      </GreenBackground>

      <ButtonContainer>
        <CircularButton
          primaryText="Touch"
          secondaryText="To start"
          onClick={onTouchToStart}
        />
      </ButtonContainer>
    </Container>
  );
}
