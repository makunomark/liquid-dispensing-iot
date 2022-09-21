import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

import "../fonts/InriaSans-Regular.ttf";

const GreenBackground = styled.div`
  background-color: rgb(119, 234, 144, 40%);
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const WelcomeText = styled.p`
  font-size: 20px;
`;

export default function Landing(props: RouteComponentProps) {
  return (
    <div>
      <GreenBackground>
        <WelcomeText>Welcome</WelcomeText>
      </GreenBackground>
    </div>
  );
}
