import styled from "styled-components";
import Button from "./shared/button";
import mainBg from "../resource/images/mainBg.png";

const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${mainBg});
  background-size: 50%;
  background-position: 0 100 20;
  background-repeat: no-repeat;
  padding: 20px 50px;
  margin-top: 5vh;

  .right-container {
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-left: auto;
    margin-top: 5vh;
    p {
      letter-spacing: 1px;
      line-height: 3vh;
      margin-bottom: 5vh;
    }
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <div className="right-container">
        <h2>A newe way to explore the world</h2>
        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <Button text={"Learn more"} />
      </div>
    </MainStyled>
  );
};

export default Main;
