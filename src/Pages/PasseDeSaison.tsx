import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const PasseDeSaison: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Golf Alpine - Passe de saison 2023 au Club de Golf Alpine</title>
    </Helmet>
    <div className="container" id='about'>
      <StyledCard>
      <h2>
        Passe de saison <u>2023</u> au Club de Golf Alpine
      </h2>
      <br />
      <StyledPassesType>
        <h3>9 trous <Limit>Maximum de 30 passes de saison</Limit></h3>
        <Table>
          <thead>
            <tr>
              <ThDescription>Tarifs</ThDescription>
              <Th1Personne>1 personne</Th1Personne>
              <ThCouple>Couple</ThCouple>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TdDescription>
                <strong>5 jours</strong><small>(Excluant les jours fériés)</small>
              </TdDescription>
              <Td1Personne>$ 1045.00</Td1Personne>
              <TdCouple>$ 1895.00</TdCouple>
            </tr>
            <tr>
              <TdDescription>
                <strong>7 jours</strong>
              </TdDescription>
              <Td1Personne>$ 1275.00</Td1Personne>
              <TdCouple>$ 2295.00</TdCouple>
            </tr>
          </tbody>
        </Table>
      </StyledPassesType>
      <StyledPassesType>
        <h3>Après 15 heures <Limit>Maximum de 25 passes de saison</Limit></h3>
        <Table>
            <thead>
              <tr>
                <ThDescription>Tarifs</ThDescription>
                <Th1Personne>1 personne</Th1Personne>
                <ThCouple></ThCouple>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TdDescription>
                  <strong>Après 15 heures</strong> (9 trous, dernier départ avec voiturette à 16 heures)
                </TdDescription>
                <Td1Personne>$ 835.00</Td1Personne>
                <TdCouple></TdCouple>
              </tr>
            </tbody>
        </Table>
      </StyledPassesType>
      <StyledPassesType>
        <h3>Supplément</h3>
        <Table>
            <thead>
              <tr>
                <ThDescription>Tarifs</ThDescription>
                <Th1Personne>1 personne</Th1Personne>
                <ThCouple>Couple</ThCouple>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TdDescription>
                  <strong>Voiturette électrique</strong> <br />
                </TdDescription>
                <Td1Personne>$ 625.00</Td1Personne>
                <TdCouple>$ 800.00</TdCouple>
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
  border: 2px solid #FFFFFF;

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
  margin-left: 2vw;
  margin-top: 0.5vh;
  @media only screen and (max-width: 600px) {
    padding: 0.5vw 1vw 0.5vw 1vw;
    margin-top: 0.5vh;
    margin-right: 0;
    font-size: 2vh;
  }
  font-weight:  400;
  line-height: 1.5;
  border: 2px solid #34773A;
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

const ThDescription = styled.th`
  max-width: 60%;
  width: 60%;
`;

const Th1Personne = styled.th`
  max-width: 20%;
  width: 20%;
`;

const ThCouple = styled.th`
  max-width: 20%;
  width: 20%;
`;

const TdDescription = styled.td`
  max-width: 60%;
  width: 60%;
`;

const Td1Personne = styled.td`
  max-width: 20%;
  width: 20%;
`;

const TdCouple = styled.td`
  max-width: 20%;
  width: 20%;
`;

export default PasseDeSaison