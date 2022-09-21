import styled from "styled-components";

interface HeaderProps {
  title: string;
}

const WelcomeText = styled.p`
  font-size: 50px;
`;
export default function Header(props: HeaderProps) {
  return <WelcomeText>{props.title}</WelcomeText>;
}
