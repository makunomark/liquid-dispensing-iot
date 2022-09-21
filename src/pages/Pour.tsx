import styled from "styled-components";
import CircularButton from "../components/CircularButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Pour() {
  function onClick() {
    console.log("Call pour function");
  }

  return (
    <Container>
      <CircularButton
        primaryText="Touch"
        secondaryText="To Pour"
        onClick={onClick}
      />
    </Container>
  );
}
