import Confetti from "react-confetti";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfettiContainer = styled.div`
  position: absolute;
  top: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const EnjoyText = styled.h1`
  font-size: 60px;
`;

export default function Enjoy() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5_000);
  });

  return (
    <>
      <ConfettiContainer>
        <Confetti />
      </ConfettiContainer>
      <Container>
        <EnjoyText>Drive Safely 🚗💨</EnjoyText>
      </Container>
    </>
  );
}
