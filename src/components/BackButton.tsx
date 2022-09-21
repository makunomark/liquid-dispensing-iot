import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpArrow from "../assets/up_arrow.svg";
const BackButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  cursor: pointer;
  padding: 2rem 0rem;
`;

const Button = styled.img`
  width: 58px;
  height: 38px;
  border-radius: 15px;
  background-color: rgb(119, 234, 144, 40%);
`;

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <BackButtonContainer onClick={() => navigate(-1)}>
      <Button src={UpArrow} />
    </BackButtonContainer>
  );
}
