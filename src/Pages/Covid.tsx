import React from 'react';
import styled from 'styled-components';

const Tarifs: React.FC = () => {
  return (
    <div className="container" id="about">
      <StyledCard>
        <h2>COVID-19 Consignes pour les golfeurs responsable</h2>
        <p>
          <StyledImages src="/img/AfficheGolfeurResponsable-814x1024.png" alt="Affiche Golfeur Responsable" />
        </p>
      </StyledCard>
    </div>
  );
};

const StyledCard = styled.div`
  border: 2px;
  width: 90%;
  height: 850px;
  float: center;
  margin: 20px;
  padding: 20px;
  color: #000000;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;

const StyledImages = styled.img`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  max-height: 100%;
  max-width: 100%;
`;

export default Tarifs;
