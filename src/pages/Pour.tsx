import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import CircularButton from "../components/CircularButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Pour(props: RouteComponentProps) {
  return (
    <Container>
      <CircularButton primaryText="Touch" secondaryText="To Pour" />
    </Container>
  );
}
