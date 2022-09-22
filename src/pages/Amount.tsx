import styled from "styled-components";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import "../fonts/InriaSans-Regular.ttf";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
`;

const AmountContainer = styled.div`
  background-color: rgb(119, 234, 144, 40%);
  width: 300px;
  height: 86px;
  border-radius: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  font-weight: 300;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Amounts = () => {
  const navigate = useNavigate();

  function onAmountSelected(amount: number) {
    navigate(`/qr?amount=${amount}`);
  }

  return (
    <>
      {[100, 200, 300, 400, 500].map((amount, i) => (
        <AmountContainer key={i} onClick={() => onAmountSelected(amount)}>
          {amount}
        </AmountContainer>
      ))}
    </>
  );
};

export default function ChooseDrink() {
  return (
    <Container>
      <Header title="Choose Amount" />
      <Amounts />
      <BackButton />
    </Container>
  );
}
