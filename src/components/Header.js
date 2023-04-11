import styled from "styled-components";
import Button from "../components/shared/button";
import logo from "../resource/icons/logo.png";
import headerBg from "../resource/images/headerBg.png";
import { Link } from "react-router-dom";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  align-items: center;

  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26vw;
  }
  .right-box {
    display: flex;
    align-items: center;
    gap: 5vw;
    font-weight: 100;
  }
  .nav-container {
    display: flex;
    gap: 5vw;
    font-size: 20px;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #202336;
      }
    }
  }
  .button-container {
    display: flex;
    gap: 20px;
  }
  .filter-section {
    width: 100%;
    margin-top: 5vh;
    background-image: url(${headerBg});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 100% 95%;
    h1 {
      width: 35vw;
      color: #202336;
      font-weight: 700;
      font-size: 64px;
      line-height: 80px;
      color: #202336;
    }
    h4 {
      margin-bottom: 6vh;
    }
    .select-box {
      display: flex;
      gap: 2vw;
      width: 30vw;
      flex-wrap: wrap;
      margin-bottom: 5vh;
      select {
        width: 12vw;
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="top-container">
        <div className="icon-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-box">
          <ul className="nav-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/partner">Partner</Link>
            </li>
          </ul>
          <div className="button-container">
            <Button text="Login" backgroundColor="#fff" color="#FB8F1D" />
            <Button text="Register" backgroundColor="#FB8F1D" />
          </div>
        </div>
      </div>
      <section className="filter-section">
        <h1>Explore and Travel</h1>
        <h4>Holiday finder</h4>
        <div className="select-box">
          <select>
            <option value="Location">Location</option>
          </select>
          <select>
            <option value="Activity">Activity</option>
          </select>
          <select>
            <option value="Grade">Grade</option>
          </select>
          <select>
            <option value="Date">Date</option>
          </select>
        </div>
        <Button text={"Explore"} />
      </section>
    </HeaderStyled>
  );
};

export default Header;
