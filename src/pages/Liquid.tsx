import BubbleUI from "react-bubble-ui";
import styled from "styled-components";
import CocaCola from "../assets/coca_cola.svg";
import Dasani from "../assets/dasani.svg";
import Fanta from "../assets/fanta.svg";
import MountainDew from "../assets/mountain_dew.svg";
import Sprite from "../assets/sprite.svg";

import { useNavigate, NavigateFunction } from "react-router-dom";

import "../fonts/InriaSans-Regular.ttf";

import "./styles.css";

import "react-bubble-ui/dist/index.css";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

type Data = {
  name: String;
  logo: any;
};

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10%;
`;

export default function ChooseDrink() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header title="Choose Drink" />
      <Bubble navigate={navigate} />
      <BackButton />
    </Container>
  );
}

const Bubble = ({ navigate }: { navigate: NavigateFunction }) => {
  const options = {
    size: 200,
    minSize: 100,
    gutter: 20,
    provideProps: true,
    numCols: 2,
    fringeWidth: 200,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const sampleData = [
    {
      name: "Sprite",
      logo: Sprite,
    },
    {
      name: "CoCa Cola",
      logo: CocaCola,
    },
    {
      name: "Fanta",
      logo: Fanta,
    },
    {
      name: "Mountain Dew",
      logo: MountainDew,
    },
    {
      name: "Dasani",
      logo: Dasani,
    },
  ];

  const ChildBubble = ({ data }: { data: Data }) => {
    const Container = styled.div`
      background-color: rgb(119, 234, 144, 40%);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;

    const Image = styled.img`
      width: 60px;
      height: 60px;
    `;

    function onSelectDrink() {
      navigate("/amount");
    }

    return (
      <Container onClick={onSelectDrink}>
        <Image src={data.logo} />
      </Container>
    );
  };

  return (
    <BubbleUI options={options} className="myBubbleUI">
      {sampleData.map((data, i) => (
        <ChildBubble key={i} data={data} />
      ))}
    </BubbleUI>
  );
};
