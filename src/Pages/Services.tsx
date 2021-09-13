import React from 'react'
import styled from 'styled-components'

const Services: React.FC = () => {
  return (
    <div className="container" id='about'>
      <StyledCard>
      <h2>
        Les services
      </h2>
      <Table>
        <tbody>
          <tr>
            <td>Passe de saison</td>
            <td>Boutique de golf</td>
          </tr>
          <tr>
            <td>Livrets de parties</td>
            <td>Organisation de tournoi</td>
          </tr>
          <tr>
            <td>Cartes Cadeaux</td>
            <td>Terrain de pratique</td>
          </tr>
          <tr>
            <td>Voiturette électrique</td>
            <td>Voiturettes à main</td>
          </tr>
          <tr>
            <td>Vert de pratique</td>
            <td>Location d’équipements</td>
          </tr>
          <tr>
            <td>Leçons de golf par un professionnel</td>
            <td>Magnifique terrasse</td>
          </tr>
        </tbody>
      </Table>
      </StyledCard>
    </div>
  )
}

const StyledCard = styled.div`
  border: 2px;
  width: 90%;
  float: center;
  margin: 20px;
  padding: 20px;
  color: #000000;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    border-bottom: 1px solid #34773A;
    color: #34773A;
    padding: 16px;
  }

  th {
    color: #34773A;
    font-size: 12px;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export default Services