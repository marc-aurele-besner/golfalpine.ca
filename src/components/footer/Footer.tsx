import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <div className="container">
      <StyledFooter>
        <StyledImgFooter src="/img/golf-alpine-ste-adele.png" alt="Golf Alpine Ste-Adele" />
        <StyledTextFooter>
          <h3>Le golf Alpine plus apprécié au Québec en 2019</h3>
          <p>
            Le golf Alpine, situé dans les Laurentides, a été sélectionné par Info Golf comme étant le club de golf le plus apprécié au Québec en 2019. C’est la
            première fois que ce club de golf remporte cet honneur. Félicitations à toute l’équipe du club de golf Alpine. Pour ceux qui ne connaissent pas
            encore ce terrain de golf, n’hésitez pas à vous y rendre et découvrir la magnifique région des Laurentides et de Sainte-Adèle et ses environs. Le
            golf Alpine c’est un magnifique parcours 9 trous avec une normale 36.
          </p>
        </StyledTextFooter>
      </StyledFooter>
    </div>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  float: center;
  text-align: left;
  margin: 0.5vw;
  border-radius: 10px;
  color: #000000;
  padding: 0.5vw;
  position: bottom;
`;

const StyledTextFooter = styled.div`
  width: 100%;
  padding-left: 8vw;
  position: relative;
`;

const StyledImgFooter = styled.img`
  width: 180px;
  float: left;
  text-align: left;
  padding: 0.1vw;
  position: relative;
`;

export default Footer;
