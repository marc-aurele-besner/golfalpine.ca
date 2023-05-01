import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Video from '../Components/Video';
import Reservation from '../Components/Reservation';

const Accueil: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Golf Alpine - Accueil</title>
      </Helmet>
      <Video />
      <div className="container">
        <Reservation />
        <StyledCardFrame>
          <StyledOpen>Merci pour la saison 2022!</StyledOpen>
          <StyledCard>
            <img src="/img/thumb_3.png" alt="COVID-19" width="100%" />
            <h3>Tarifs et Livret de parties</h3>
            <p>
              Consultez nos tarifs attractifs et profitez de l&apos;occasion d&apos;économiser en achetant notre livret de 10 parties à un tarif avantageux.
            </p>
            <Link href="/tarifs">Consulter les tarifs</Link>
          </StyledCard>
          <StyledCard>
            <img src="/img/thumb_2.png" alt="Visite Virtuelle9" width="100%" />
            <h3>Visite Virtuelle</h3>
            <p>Visiter notre club de Golf centenaire avec la technologie d’aujourd’hui.</p>
            <Link href="https://goo.gl/maps/Z8TL2" target="_blank">
              visite virtulle
            </Link>
          </StyledCard>
          <StyledCard>
            <img src="/img/thumb_history.jpg" alt="Histoire (1910 à 2020)" width="100%" />
            <h3>Histoire (1910 à 2020)</h3>
            <p>Depuis le tout début du siècle dernier, le golf Alpine fait figure de véritable institution à Saint-Adèle.</p>
          </StyledCard>
          <StyledBody>
            <h1>Laissez-vous séduire par la beauté du paysage et le tracé des allées…</h1>
            <p>
              Le Club de Golf Alpine, qui a vu le jour en 1910, est situé entre les villages de Sainte-Adèle et de Sainte-Marguerite. Un trajet d’à peine 60
              kilomètres. soit 45 minutes, de Montréal (sortie 69 de l’autoroute 15). Le parcours, à normale 36, s’étend sur un site enchanteur. Facile à
              marcher, il nécessite néanmoins de la précision, un défi pour les golfeurs ! Le chalet offre une vue pittoresque sur le golf… Venez profiter de
              notre légendaire hospitalité dans un décor chaleureux et confortable!
            </p>
          </StyledBody>
        </StyledCardFrame>
      </div>
    </>
  );
};
const StyledOpen = styled.h1`
  padding-left: 1vw;
`;

const StyledCardFrame = styled.div`
  padding: 0.5vw;
  height: 500px;
  width: 100%;
  float: center;
  position: relative;
`;

const StyledCard = styled.div`
  border: 2px;
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  float: left;
  margin: 0.5vw;
  border: 2px solid #ffffff;
  &:hover {
    border: 2px solid #34773a;
    background: linear-gradient(139.73deg, #c4e9c2 0%, #72b46f 100%);
  }
  border-radius: 10px;
  color: #000000;
  padding: 0.5vw;
  overflow: hidden;
  position: relative;
`;

const Link = styled.a`
  color: red;
  hover: green;
`;

const StyledBody = styled.div`
  border: 2px;
  width: 90%;
  height: 60vh;
  margin: 0.5vw;
  border-radius: 10px;
  color: #000000;
  padding-top: 6vh;
  position: relative;
  float: left;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default Accueil;
