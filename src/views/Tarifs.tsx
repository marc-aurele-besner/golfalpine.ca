import React from 'react'
import styled from 'styled-components'

const Tarifs: React.FC = () => {
  return (
    <>
      <div className='container' id='about'>
        <StyledCard>
          <h2>Nos tarifs</h2>
          <StyledBox>
            <StyledCardTarifs>
              <StyledTarrifType>
                <Table>
                  <tbody>
                    <tr>
                      <TdDescription>
                        <h3>
                          <b>Tarifs régulier</b>
                        </h3>
                      </TdDescription>
                      <Td9Trous>
                        <strong>9 trous</strong>
                      </Td9Trous>
                      <Td18Trous>
                        <strong>18 trous</strong>
                      </Td18Trous>
                    </tr>
                    <tr>
                      <TdDescription>
                        <strong>Lundi au Vendredi</strong>
                      </TdDescription>
                      <Td9Trous>$ 29.00</Td9Trous>
                      <Td18Trous>$ 42.00</Td18Trous>
                    </tr>
                    <tr>
                      <TdDescription>
                        <strong>Samedi et Dimanche</strong>
                        <br />
                        Et jours fériés
                      </TdDescription>
                      <Td9Trous>$ 31.00</Td9Trous>
                      <Td18Trous>$ 44.00</Td18Trous>
                    </tr>
                  </tbody>
                </Table>
              </StyledTarrifType>
              <StyledTarrifType>
                <Table>
                  <tbody>
                    <tr>
                      <TdDescription>
                        <strong>
                          <h3>Tarifs à rabais</h3>
                        </strong>
                      </TdDescription>
                      <Td9Trous>
                        <strong>9 trous</strong>
                      </Td9Trous>
                      <Td18Trous></Td18Trous>
                    </tr>
                    <tr>
                      <TdDescription>
                        <strong>Lundi au Dimanche</strong>
                        <br />
                        Avant 8 heures
                        <br />
                        Après 16 heures
                      </TdDescription>
                      <Td9Trous>$ 22.00</Td9Trous>
                      <Td18Trous> N/A</Td18Trous>
                    </tr>
                  </tbody>
                </Table>
              </StyledTarrifType>
              <StyledTarrifType>
                <Table>
                  <tbody>
                    <tr>
                      <TdDescription>
                        <h3>
                          <b>Accessoires</b>
                        </h3>
                      </TdDescription>
                      <Td9Trous>
                        <strong>9 trous</strong>
                      </Td9Trous>
                      <Td18Trous>
                        <strong>18 trous</strong>
                      </Td18Trous>
                    </tr>
                  </tbody>
                </Table>
                <Table>
                  <tbody>
                    <tr>
                      <TdDescription>
                        <strong>Voiturette électrique</strong>
                        <br />1 personne
                        <br />2 personnes
                      </TdDescription>
                      <Td9Trous>
                        $ 17.00
                        <br />$ 22.00
                      </Td9Trous>
                      <Td18Trous>
                        $ 22.00
                        <br />$ 35.00
                      </Td18Trous>
                    </tr>
                    <tr>
                      <TdDescription>
                        <strong>Voiturette à main</strong>
                      </TdDescription>
                      <Td9Trous>$ 6.00</Td9Trous>
                      <Td18Trous>$ 10.00</Td18Trous>
                    </tr>
                  </tbody>
                </Table>
              </StyledTarrifType>
            </StyledCardTarifs>
            <StyledCardLivret>
              <StyledImages src='/img/thumb_3.png' alt='livret' />
              <StyledLabelLivret>
                <h3>
                  <b>Livret de 10 parties</b>
                </h3>
                <TableLivret>
                  <tbody>
                    <tr>
                      <ThLivret>9 trous</ThLivret>
                      <ThLivret>18 trous</ThLivret>
                    </tr>
                    <tr>
                      <TdLivret>$ 245.00</TdLivret>
                      <TdLivret>$ 355.00</TdLivret>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <strong>Avec voiturette électrique</strong>
                      </td>
                    </tr>
                    <tr>
                      <TdLivret>$ 375.00</TdLivret>
                      <TdLivret>$ 520.00</TdLivret>
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
`

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

  border: 2px solid #ffffff;

  &:hover {
    border: 2px solid #34773a;
    background: linear-gradient(139.73deg, #d3f4d1 0%, #8bd087 100%);
    border-radius: 25px;
  }
`

const StyledBox = styled.div`
  width: 100%;
`

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
`

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
`

const StyledLabelLivret = styled.div`
  width: 100%;
  margin-top: 0.5vw;
  padding-top: 1vw;

  border: 2px solid #ffffff;

  &:hover {
    border: 2px solid #34773a;
    background: linear-gradient(139.73deg, #d3f4d1 0%, #8bd087 100%);
    border-radius: 25px;
  }
`

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
`

const Table = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    border-bottom: 1px solid #34773a;
    color: #34773a;
    padding: 16px;
  }

  th {
    color: #34773a;
    font-size: 14px;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`

const TdDescription = styled.td`
  max-width: 50%;
  width: 50%;
`

const Td9Trous = styled.td`
  max-width: 25%;
  width: 25%;
`

const Td18Trous = styled.td`
  max-width: 25%;
  width: 25%;
`

const TableLivret = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    color: #34773a;
    padding: 16px;
  }

  th {
    color: #34773a;
    font-size: 14px;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`

const ThLivret = styled.th`
  max-width: 50%;
  width: 50%;
`

const TdLivret = styled.td`
  max-width: 50%;
  width: 50%;
`

export default Tarifs
