import styled from "styled-components";
import UpArrow from "../assets/up_arrow.svg";
import Header from "../components/Header";

import "../fonts/InriaSans-Regular.ttf";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
`;

const BackButton = styled.img`
  width: 58px;
  height: 38px;
  border-radius: 15px;
  background-color: rgb(119, 234, 144, 40%);
`;

const BackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
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
  return (
    <>
      {[100, 200, 300, 400, 500].map((amount, i) => (
        <AmountContainer key={i}>{amount}</AmountContainer>
      ))}
    </>
  );
};

export default function ChooseDrink() {
  return (
    <Container>
      <Header title="Choose Amount" />
      <Amounts />
      <BackButtonContainer>
        <BackButton src={UpArrow} />
      </BackButtonContainer>
    </Container>
  );
}
