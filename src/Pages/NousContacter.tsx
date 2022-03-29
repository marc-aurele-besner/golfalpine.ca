import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

import NousEcrire from '../Components/NousEcrire'

const NousContacter: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Golf Alpine - Nous contacter</title>
      </Helmet>
      <div className="container" id='about'>
        <StyledContact>
          <h2>
            Nous contacter
          </h2>
          <StyledCard>
            <h3>
              Coordonées
            </h3>
            <Table>
              <tbody>
                <tr>
                  <td><strong>Adresse</strong></td>
                  <td>
                    1466, rue des Copains<br />
                    Ste-Adèle (Québec)<br />
                    J8B 2A1
                  </td>
                </tr>
                <tr>
                  <td><strong>Courriel</strong></td>
                  <td>
                    info@golfalpine.ca<br />
                    golfalpine@hotmail.com
                  </td>
                </tr>
                <tr>
                  <td><strong>Téléphone</strong></td>
                  <td>
                    (450) 229-6600<br />
                    1-800-361-3303
                  </td>
                </tr>
              </tbody>
            </Table>
            <iframe 
              loading="lazy" 
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2548.4574746949884!2d-74.12500688095096!3d45.98604398541074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf3852ea040003%3A0x689bad9137c0779e!2sClub+de+Golf+Alpine!5e1!3m2!1sfr!2sca!4v1401331349724" 
              width="100%" 
              height="300" 
            />
          </StyledCard>
          <StyledCard>
          <h3>
            Nous écrire
          </h3>
          <NousEcrire />
        </StyledCard>
      </StyledContact>
    </div>
    </>
  )
}

const StyledContact = styled.div`
  border: 2px;
  width: 90%;
  float: center;
  margin: 0.5vw;
  margin-top: 2vw;
  padding: 1vw;
  padding-top: 3vw;
  @media only screen and (max-width: 600px) {
    padding-top: 4vh;
  }
  color: #000000;
  padding: 10px;
  position: relative;
`;

const StyledCard = styled.div`
  border: 2px;
  width: 45%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  float: left;
  margin: 0.5vw;
  border: 2px solid #FFFFFF;
  &:hover {
    border: 2px solid #34773A;
    background: linear-gradient(139.73deg, #C4E9C2 0%, #72B46F 100%);
  }
  border-radius: 10px;
  color: #000000;
  padding: 0.5vw;
  position: relative;
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    border-bottom: 1px solid #34773A;
    color: #34773A;
    padding: 3vh;
  }

  th {
    color: #34773A;
    font-size: 3vh;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export default NousContacter