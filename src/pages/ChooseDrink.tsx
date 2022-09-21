import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import BubbleUI from "react-bubble-ui";
import UpArrow from "../assets/up_arrow.svg";
import CocaCola from "../assets/coca_cola.svg";
import Dasani from "../assets/dasani.svg";
import Fanta from "../assets/fanta.svg";
import MountainDew from "../assets/mountain_dew.svg";
import Sprite from "../assets/sprite.svg";

import "../fonts/InriaSans-Regular.ttf";

import "./styles.css";

import "react-bubble-ui/dist/index.css";

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

const DrinkText = styled.p`
  font-size: 66px;
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

const Bubble = () => {
  const options = {
    size: 100,
    minSize: 70,
    gutter: 20,
    provideProps: true,
    numCols: 3,
    fringeWidth: 45,
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
    `;

    const Image = styled.img`
      width: 60px;
      height: 60px;
    `;

    return (
      <Container>
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

export default function ChooseDrink(props: RouteComponentProps) {
  return (
    <Container>
      <DrinkText>Choose Drink</DrinkText>
      <Bubble />
      <BackButtonContainer>
        <BackButton src={UpArrow} />
      </BackButtonContainer>
    </Container>
  );
}
