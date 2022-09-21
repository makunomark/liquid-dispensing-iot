import styled from "styled-components";

const AppContainer = styled.div`
  height: 1000px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <AppContainer>{children}</AppContainer>;
}
