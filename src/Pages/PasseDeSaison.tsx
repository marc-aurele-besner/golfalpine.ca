import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const PasseDeSaison: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Golf Alpine - Passe de saison 2022 au Club de Golf Alpine</title>
    </Helmet>
    <div className="container" id='about'>
      <StyledCard>
      <h2>
        Passe de saison <u>2022</u> au Club de Golf Alpine
      </h2>
      <br />
      <StyledPassesType>
        <h3>9 trous <Limit>Maximum de 30 passes de saison</Limit></h3>
        <Table>
            <thead>
                <tr>
                    <th>Tarifs</th>
                    <th>1 personne</th>
                    <th>Couple</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>5 jours</strong><small>(Excluant les jours fériés)</small></td>
                    <td>$ 995.00</td><td>$ 1795.00</td>
                </tr>
                <tr>
                    <td><strong>7 jours</strong></td>
                    <td>$ 1195.00</td>
                    <td>$ 2135.00</td>
                </tr>
            </tbody>
        </Table>
      </StyledPassesType>
      <StyledPassesType>
        <h3>18 trous <Limit>Maximum de 20 passes de saison</Limit></h3>
        <Table>
            <thead>
                <tr>
                    <th>Tarifs</th>
                    <th>1 personne</th>
                    <th>Couple</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>5 jours</strong> <small>(Excluant les jours fériés)</small></td>
                    <td>$ 1495.00</td>
                    <td>$ 2695.00</td>
                </tr>
                <tr>
                    <td><strong>7 jours</strong> </td>
                    <td>$ 1795.00</td>
                    <td>$ 3250.00</td>
                </tr>
            </tbody>
        </Table>
      </StyledPassesType>
      <StyledPassesType>
        <h3>Après 15 heures <Limit>Maximum de 25 passes de saison</Limit></h3>
        <Table>
            <thead>
                <tr>
                    <th>Tarifs</th>
                    <th>1 personne</th>
                    <th>Couple</th>
                </tr>
            </thead>
                <tbody><tr>
                    <td><strong>Après 15 heures</strong> (9 trous, dernier départ avec voiturette à 16 heures)</td>
                    <td>$ 795.00</td>
                </tr>
            </tbody>
        </Table>
      </StyledPassesType>
      <StyledPassesType>
        <h3>Supplément</h3>
        <Table>
            <thead>
                <tr>
                    <th>Tarifs</th>
                    <th>1 personne</th>
                    <th>Couple</th>
                </tr>
            </thead>
                <tbody><tr>
                    <td><strong>Voiturette électrique</strong> <br /></td>
                    <td>$ 600.00</td>
                    <td>$ 775.00</td>
                </tr>
            </tbody>
        </Table>
      </StyledPassesType>
    </StyledCard>
  </div>
  </>
  )
}

const StyledCard = styled.div`
  border: 2px;
  width: 90%;
  float: center;
  margin: 0.5vw;
  padding: 1vw;
  padding-top: 2vw;
  @media only screen and (max-width: 600px) {
    padding-top: 4vh;
  }
  color: #000000;
  position: relative;
`;

const StyledPassesType = styled.div`
  border: 2px;
  width: 98%;
  float: center;
  margin: 0.5vw;
  padding: 0.5vw;
  color: #000000;
  position: relative;

  &:hover {
    border: 2px solid #34773A;
    background: linear-gradient(139.73deg, #D3F4D1 0%, #8BD087 100%);
    border-radius: 25px;
  }
`;

const Limit = styled.div`
  background-color: #34773A;
  float: right;
  border-radius: 10px;
  padding: 0.2vw 0.3vw 0.2vw 0.3vw;
  color: #FFFFFF;
  font-size: 2.5vh;
  margin-right: 50%;
  @media only screen and (max-width: 600px) {
    padding: 0.5vw 1vw 0.5vw 1vw;
    margin-top: 0.5vh;
    margin-right: 0;
    font-size: 2vh;
  }
  font-weight:  400;
  line-height: 1.5;
  &:hover {
    color: #34773A;
    border: 2px solid #34773A;
    background: linear-gradient(139.73deg, #FFFFFF 0%, #D3F4D1 100%);
  }
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;
  margin: 0.5vw;
  th,
  td {
    border-bottom: 1px solid #34773A;
    color: #34773A;
    padding: 2vh;
  }

  th {
    color: #34773A;
    font-size: 2vh;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export default PasseDeSaison