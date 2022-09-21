import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { border-color: rgb(119, 234, 144, 40%); }
 50% { border-color: rgb(119, 234, 144, 100%); }
 100% { border-color: rgb(119, 234, 144, 40%);}
`;

const OuterContainer = styled.div`
  border: 13px solid rgb(119, 234, 144, 16%);
  border-radius: 50%;
  &:after {
    display: block;
  }
`;

const InnerContainer = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 16px solid rgb(119, 234, 144, 40%);
  border-radius: 50%;
  padding: 0px;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

const PrimaryText = styled.span`
  font-size: 50px;
  font-weight: light;
  text-transform: uppercase;
`;

const SecondaryText = styled.span`
  font-size: 38px;
  text-transform: uppercase;
`;

type CircularButtonProps = {
  primaryText: string;
  secondaryText?: string;
  onClick?: () => void;
};

export default function CircularButton(props: CircularButtonProps) {
  return (
    <OuterContainer onClick={props.onClick}>
      <InnerContainer>
        <PrimaryText>{props.primaryText}</PrimaryText>
        {props.secondaryText && (
          <SecondaryText>{props.secondaryText}</SecondaryText>
        )}
      </InnerContainer>
    </OuterContainer>
  );
}
