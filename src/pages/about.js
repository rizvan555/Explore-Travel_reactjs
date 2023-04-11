import styled from "styled-components";
import Button from "../components/shared/button";
import aboutBg from "../resource/images/aboutBg.png";

const AboutStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${aboutBg});
  background-size: 50%;
  background-position: 90% 0;
  background-repeat: no-repeat;
  padding: 20px 50px;
  margin: 20vh auto 6vh auto;

  .right-container {
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin-top: 5vh;
    h2 {
      font-size: 50px;
    }
    p {
      letter-spacing: 1px;
      line-height: 3vh;
      margin-bottom: 10vh;
      font-size: 20px;
      font-weight: 100;
    }
  }
`;

const About = () => {
  return (
    <AboutStyled>
      <div className="right-container">
        <h2>Guides by Thousand Sunny</h2>
        <p>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <Button text={"Download"} />
      </div>
    </AboutStyled>
  );
};

export default About;
