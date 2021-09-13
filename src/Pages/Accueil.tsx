import React from 'react'
import styled from 'styled-components'
import Video from '../Components/Video'
import Reservation from '../Components/Reservation'

const Accueil: React.FC = () => {
  return (
    <>
      <Video />
      <div className="container">
        <Reservation />
        <StyledCardFrame>
          <StyledCard>
            <img src="/img/AfficheGolfeurResponsable_small.png" alt="COVID-19" width="100%" />
            <h3>COVID-19</h3>
            <p>
              Avant de venir jouer, nous vous demandons de consulter les consignes pour les golfeurs relatif au Corona Virus.
            </p>
            <Link href="/covid">Agrandir</Link>
          </StyledCard>
          <StyledCard>
            <img src="/img/thumb_2.png" alt="Visite Virtuelle9" width="100%" />
            <h3>Visite Virtuelle</h3>
            <p>
              Visiter notre club de Golf centenaire avec la technologie d’aujourd’hui.
            </p>
            <Link href="https://goo.gl/maps/Z8TL2" target="_blank">visite virtulle</Link>
          </StyledCard>
          <StyledCard>
            <img src="/img/thumb_history.jpg" alt="Histoire (1910 à 2020)" width="100%" />
            <h3>Histoire (1910 à 2020)</h3>
            <p>
            Depuis le tout début du siècle dernier, le golf Alpine fait figure de véritable institution à Saint-Adèle.
            </p>
          </StyledCard>
        </StyledCardFrame>
        <StyledBody>
          <h1>Laissez-vous séduire par la beauté du paysage et le tracé des allées…</h1>
          <p>
            Le Club de Golf Alpine, qui a vu le jour en 1910, est situé entre les villages de Sainte-Adèle et de Sainte-Marguerite. 
            Un trajet d’à peine 60 kilomètres. soit 45 minutes, de Montréal (sortie 69 de l’autoroute 15). 
            Le parcours, à normale 36, s’étend sur un site enchanteur. Facile à marcher, il nécessite néanmoins de la précision, 
            un défi pour les golfeurs ! Le chalet offre une vue pittoresque sur le golf… 
            
            Venez profiter de notre légendaire hospitalité dans un décor chaleureux et confortable!</p>
        </StyledBody>
      </div>
    </>
  )
}
const StyledCardFrame = styled.div`
  padding: 20px;
`;

const StyledCard = styled.div`
  border: 2px;
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  float: left;
  margin: 0.5vw;
  background-color: #E2E2E2;
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
  margin: 20px;
  border-radius: 10px;
  color: #000000;
  padding: 20px;
  position: relative;
`;

export default Accueil