import styled from "styled-components";
import logo from "../resource/icons/logo.png";
import face from "../resource/icons/face.png";
import twitter from "../resource/icons/twitter.png";
import instagram from "../resource/icons/instagram.png";
import linkedin from "../resource/icons/linkedin.png";
import youtube from "../resource/icons/youtube.png";

const FooterStyled = styled.footer`
  background-color: #f9f9fb;
  .top-container {
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
  }
  .left-container {
    display: flex;
    flex-direction: column;
    width: 28vw;

    img {
      width: 30px;
      margin-bottom: 3vh;
    }
    p {
      margin-bottom: 8vh;
      line-height: 3vh;
    }
  }
  .right-container {
    display: flex;
    gap: 5vw;
    ul {
      list-style-type: none;
      p {
        font-weight: bold;
      }
      li {
        margin-bottom: 2vh;
      }
    }
  }

  .bottom-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;

    .social-media-container {
      display: flex;
      gap: 3vw;
      margin: 20px auto;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="top-container">
        <div className="left-container">
          <img src={logo} alt="" />
          <p>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <span>©2020 Thousand Sunny. All rights reserved</span>
        </div>
        <div className="right-container">
          <ul className="destinations">
            <p>Destinations</p>
            <li>Africa</li>
            <li>Antarctica</li>
            <li>Asia</li>
            <li>Europa</li>
            <li>America</li>
          </ul>
          <ul className="shop">
            <p>Shop</p>
            <li>Destination Guides</li>
            <li>Pictorial & Gifts</li>
            <li>Special Offers</li>
            <li>Delivery Times</li>
            <li>FAQ</li>
          </ul>
          <ul className="interests">
            <p>Interests</p>
            <li>Adventure Travel </li>
            <li>Art And Culture</li>
            <li>Wildlife And Nature</li>
            <li> Family Holidays</li>
            <li>Food And Drink</li>
          </ul>
        </div>
      </div>
      <div className="bottom-container">
        <div className="social-media-container">
          <img src={twitter} alt="twitter" />
          <img src={face} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
