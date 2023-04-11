import styled from "styled-components";

const Destinations = () => {
  const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    margin: 10vh auto 5vh auto;
  `;
  const MainStyled = styled.main`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10vh;
    img {
      width: 20vw;
      border-radius: 5px;
    }
  `;

  return (
    <div>
      <HeaderStyled>
        <h1>Featured destinations</h1>
        <p>View all ></p>
      </HeaderStyled>
      <MainStyled>
        <img
          src="https://media.istockphoto.com/id/1093110112/de/foto/malerische-morgen-im-nationalpark-plitvice-bunter-fr%C3%BChling-szene-des-gr%C3%BCnen-waldes-mit-reinem.jpg?s=612x612&w=0&k=20&c=v_kvfrWz2g_VqSXqK5w-i7GgN_wICHrA0jLuoEgkLuk="
          alt=""
        />
        <img
          src="https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22809.jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22807.jpg"
          alt=""
        />
        <img
          src="https://img.freepik.com/fotos-kostenlos/weitwinkelaufnahme-eines-einzelnen-baumes-der-unter-einem-bewoelkten-himmel-waehrend-eines-sonnenuntergangs-waechst-der-durch-gras-umgeben-wird_181624-22810.jpg"
          alt=""
        />
      </MainStyled>
    </div>
  );
};

export default Destinations;
