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

const HeaderText = styled.p`
  width: "100%";
  text-align: center;
  font-size: 33px;
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

export default function ChooseDrink() {
  const title = "Choose Drink";
  return (
    <Container>
      <HeaderText>{title}</HeaderText>
      <Bubble />
      <BackButtonContainer>
        <BackButton src={UpArrow} />
      </BackButtonContainer>
    </Container>
  );
}

const Bubble = () => {
  const options = {
    size: 100,
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
