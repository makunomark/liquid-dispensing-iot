import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import { v4 } from "uuid";
import { useNavigate, NavigateFunction } from "react-router-dom";

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

function pollPaymentStatus(
  uid: string,
  navigate: NavigateFunction,
  counter = 0
) {
  fetch(`https://api.paystack.co/transaction/verify/${uid}`)
    .then((res) => res.json())
    .then((res) => {
      if (counter === 1) navigate("/pour");
      setTimeout(() => pollPaymentStatus(uid, navigate, ++counter), 3000);
    });
}

export default function QRCode() {
  const [qr, setQr] = useState<string | null>(null);
  const request = {
    amount: window.location.search?.split("=")?.[1],
    uid: v4(),
  };
  const navigate = useNavigate();

  const styles = {
    common: {
      height: "80%",
      width: "100%",
      position: "absolute" as "absolute",
      opacity: 1,
    },
  };

  fetch(`http://localhost:3000?body=${JSON.stringify(request)}`)
    //.then((res) => res.json())
    .then((res) => {
      setQr("https://example.com");
      pollPaymentStatus(request.uid, navigate);
    });

  return (
    <MainSection>
      <Header title="Pay" />
      <SubHeader>
        <SubDisplay>Total Pay</SubDisplay>
        <Amount>Ksh. {request.amount}</Amount>
      </SubHeader>
      <SubHeaderText>Scan to Pay</SubHeaderText>
      <MainPart>
        {!qr ? (
          <h3 style={{ ...styles.common, textAlign: "center" }}>
            Loading . . .
          </h3>
        ) : (
          <QRCodeSVG value={qr} style={styles.common} />
        )}
        <MainBg>
          <SecBg></SecBg>
        </MainBg>
      </MainPart>
      <BackButton />
    </MainSection>
  );
}
