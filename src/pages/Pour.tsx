import styled from "styled-components";
import CircularButton from "../components/CircularButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Constants from "../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const CircleProgress = styled.circle`
  background: rgb(119, 234, 144);
  box-shadow: 0 3px 3px -5px rgb(119, 234, 144), 0 2px 5px rgb(119, 234, 144);
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

const CircleProgressContainer = styled.circle`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
`;

export default function Pour() {
  const navigate = useNavigate();

  const [loading, setLoader] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (loading && counter < 101) {
      setInterval(function () {
        setCounter((counter) => (counter < 100 ? counter + 1 : counter));
      }, 1000);
    }

    if (loading && counter === 100) {
      clearInterval(counter);
      setLoader(false);
      switchFunction("Turn Pump Off");

      setTimeout(() => {
        navigate("/enjoy");
      }, 2000);
    }
  }, [loading, counter, navigate]);

  function onClick() {
    setLoader(true);
    switchFunction("Turn Pump On");
  }

  const switchFunction = (value: string) => {
    fetch(`${Constants.BASE_URL}${Constants.ROUTE_PUMP_ON}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(value, "JSON ===>>>");
      });
  };

  return (
    <Container>
      <CircularButton
        primaryText="Touch"
        secondaryText="To Pour"
        onClick={onClick}
      />
      <CircleProgressContainer>
        <CircleProgress
          style={{
            opacity: counter ? 1 : 0,
            width: `${counter}%`,
          }}
        >
          {counter}
        </CircleProgress>
      </CircleProgressContainer>
    </Container>
  );
}
