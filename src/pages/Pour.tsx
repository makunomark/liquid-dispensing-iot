import styled from "styled-components";
import CircularButton from "../components/CircularButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Pour() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/enjoy");
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
