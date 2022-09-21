import Confetti from "react-confetti";
import styled from "styled-components";

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
  return (
    <>
      <ConfettiContainer>
        <Confetti />
      </ConfettiContainer>
      <Container>
        <EnjoyText>Enjoy</EnjoyText>
      </Container>
    </>
  );
}
