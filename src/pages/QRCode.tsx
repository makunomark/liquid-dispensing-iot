import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const HeaderText = styled.h3`
  width: "100%";
  text-align: center;
  font-size: 33px;
`;
const SubHeaderText = styled.h1`
  width: "100%";
  text-align: center;
  font-size: 33px;
`;
const SubHeader = styled.h1`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const SubDisplay = styled.h1`
  font-size: 21px;
`;
const Amount = styled.h1`
  font-weight: 700;
  font-size: 21px;
`;

const MainPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MainBg = styled.div`
  height: 510px;
  width: 490px;
  background-color: #edfcf1;
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecBg = styled.div`
  height: 472px;
  width: 448px;
  background-color: #77ea90;
  border-radius: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.06;
  position: relative;
`;

const Backbt = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
`;

export default function QRCode() {
  return (
    <MainSection>
      <HeaderText>Pay</HeaderText>
      <SubHeader>
        <SubDisplay>Total Pay</SubDisplay>
        <Amount>Ksh. 100000</Amount>
      </SubHeader>
      <SubHeaderText>Scan to Pay</SubHeaderText>
      <MainPart>
        <QRCodeSVG
          value="This is a test"
          style={{
            height: "80%",
            width: "100%",
            position: "absolute",
            opacity: 1,
          }}
        />
        <MainBg>
          <SecBg></SecBg>
        </MainBg>
      </MainPart>
      <Backbt>&larr;</Backbt>
    </MainSection>
  );
}
