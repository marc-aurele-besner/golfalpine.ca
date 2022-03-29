import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const Tarifs: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Golf Alpine - Nos tarifs</title>
    </Helmet>
    <div className="container" id='about'>
      <StyledCard>
      <h2>
        Nos tarifs
      </h2>
      <StyledBox>
        <StyledCardTarifs>
          <StyledTarrifType>
          <Table>
            <tbody>
              <tr>
                <td>
                  <h3>
                    <b>Tarifs régulier</b>
                  </h3>
                </td>
                <td>
                  <strong>9 trous</strong>
                </td>
                <td>
                  <strong>18 trous</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Lundi au Vendredi</strong>
                </td>
                <td>$ 29.00</td>
                <td>$ 42.00</td>
              </tr>
                <tr>
                  <td><strong>Samedi et Dimanche</strong><br />Et jours fériés</td>
                  <td>$ 31.00</td>
                  <td>$ 44.00</td>
                </tr>
              </tbody>
            </Table>
          </StyledTarrifType>
          <StyledTarrifType>
            <Table>
              <tbody>
                <tr>
                  <td><strong><h3>Tarifs à rabais</h3></strong></td>
                  <td>
                    <strong>9 trous</strong>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Lundi au Dimanche</strong><br />Avant 8 heures<br />Après 16 heures
                  </td>
                  <td>$ 22.00</td>
                  <td> N/A</td>
                </tr>
              </tbody>
            </Table>
          </StyledTarrifType>
          <StyledTarrifType>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <h3>
                      <b>Accessoires</b>
                    </h3>
                  </td>
                <td>
                  <strong>9 trous</strong>
                </td>
                <td>
                  <strong>18 trous</strong>
                </td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td><strong>Voiturette électrique</strong><br />1 personne<br />2 personnes</td>
                  <td>$ 17.00<br />$ 22.00</td>
                  <td>$ 22.00<br />$ 35.00</td>
                </tr>
                <tr>
                  <td><strong>Voiturette à main</strong></td>
                  <td>$ 6.00</td>
                  <td>$ 10.00</td>
                </tr>
                <tr>
                  <td><strong>Location de bâtons de golf</strong></td>
                  <td>$ 17.00</td>
                  <td>$ 20.00</td>
                </tr>
              </tbody>
            </Table>
          </StyledTarrifType>
          </StyledCardTarifs>
          <StyledCardLivret>
            <StyledImages src="/img/thumb_3.png" alt="livret" />
            <StyledLabelLivret>
              <h3>
                <b>Livret de 10 parties</b>
              </h3>
              <TableLivret>
                <tbody>
                  <tr>
                    <th>9 trous</th>
                    <th>18 trous</th>
                  </tr>
                  <tr>
                    <td>$ 245.00</td>
                    <td>$ 355.00</td>
                    </tr>
                  <tr>
                    <td colSpan={2}><strong>Avec voiturette électrique</strong></td>
                  </tr>
                  <tr>
                    <td>$ 375.00</td>
                    <td>$ 520.00</td>
                  </tr>
                </tbody>
              </TableLivret>
            </StyledLabelLivret>
          </StyledCardLivret>
        </StyledBox>
      </StyledCard>
    </div>
    </>
  )
}

const StyledCard = styled.div`
  border: 2px;
  width: 90%;
  height: 850px;
  @media only screen and (max-width: 600px) {
    height: 1400px;
    padding-top: 4vh;
  }
  float: center;
  margin: 0.5vw;
  padding: 1vw;
  padding-top: 2vw;
  color: #000000;
  position: relative;
`;

const StyledTarrifType = styled.div`
  border: 2px;
  width: 98%;
  float: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  height: 100%;
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

const StyledBox = styled.div`
  width: 100%;
`;

const StyledCardTarifs = styled.div`
  width: 70%;
  position: absolute;
  @media only screen and (max-width: 600px) {
    width: 100%;
    position: relative;
  }
  float: left;
  margin: 0.5vw;
  padding: 0.5vw;
`;

const StyledCardLivret = styled.div`
  width: 25%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  float: right;
  margin: 0.5vw;
  padding: 0.5vw;
  position: relative;
  color: #000000;
`;

const StyledLabelLivret = styled.div`
  width: 100%;
  padding-top: 0.5vw;
`;

const StyledImages = styled.img`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  
  max-height: 100%;
  max-width: 100%;
  @media only screen and (max-width: 600px) {
    max-height: 70%;
    max-width: 70%;
  }
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
    font-size: 14px;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

const TableLivret = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    color: #34773A;
    padding: 16px;
  }

  th {
    color: #34773A;
    font-size: 14px;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export default Tarifs