import React from 'react'
import styled from 'styled-components'

type Parcour = {
  index: number
  fairway: string
  normal: number
  starter: {
    bleu: number
    blanc: number
    or: number
    rouge: number
  }
}

const parcours: Parcour[] = [
  {
    index: 1,
    fairway: 'Trou 1',
    normal: 4,
    starter: {
      bleu: 340,
      blanc: 320,
      or: 255,
      rouge: 245,
    },
  },
  {
    index: 2,
    fairway: 'Trou 2',
    normal: 4,
    starter: {
      bleu: 355,
      blanc: 345,
      or: 345,
      rouge: 340,
    },
  },
  {
    index: 3,
    fairway: 'Trou 3',
    normal: 4,
    starter: {
      bleu: 425,
      blanc: 405,
      or: 315,
      rouge: 310,
    },
  },
  {
    index: 4,
    fairway: 'Trou 4',
    normal: 3,
    starter: {
      bleu: 220,
      blanc: 190,
      or: 140,
      rouge: 135,
    },
  },
  {
    index: 5,
    fairway: 'Trou 5',
    normal: 4,
    starter: {
      bleu: 365,
      blanc: 350,
      or: 310,
      rouge: 305,
    },
  },
  {
    index: 6,
    fairway: 'Trou 6',
    normal: 5,
    starter: {
      bleu: 450,
      blanc: 435,
      or: 330,
      rouge: 320,
    },
  },
  {
    index: 7,
    fairway: 'Trou 7',
    normal: 3,
    starter: {
      bleu: 195,
      blanc: 180,
      or: 145,
      rouge: 140,
    },
  },
  {
    index: 8,
    fairway: 'Trou 8',
    normal: 4,
    starter: {
      bleu: 295,
      blanc: 295,
      or: 295,
      rouge: 295,
    },
  },
  {
    index: 9,
    fairway: 'Trou 9',
    normal: 5,
    starter: {
      bleu: 465,
      blanc: 465,
      or: 415,
      rouge: 405,
    },
  },
]

const Parcours: React.FC = () => {
  return (
    <>
      <div className='container' id='about'>
        <StyledParcours>
          <h2>Le parcours</h2>
          {parcours.map((parcours: Parcour, i) => (
            <StyledCard key={`StyledCard-${i}`}>
              <h3>
                Trou {parcours.index}
                <StyledNormal key={`StyledNormal-${i}`}>Par {parcours.normal}</StyledNormal>
              </h3>
              <StyledBox key={`StyledBox-${i}`}>
                <StyledBoxContent key={`StyledBoxContent-${i}`}>
                  <StyledImages
                    key={`StyledImages-${i}`}
                    src={`/img/fairway${parcours.index}.jpg`}
                    alt={parcours.fairway}
                    height='200px'
                  />
                </StyledBoxContent>
                <StyledBoxContent key={`StyledBoxContentTable-${i}`}>
                  <Table key={`Table-${i}`}>
                    <thead>
                      <tr>
                        <th>Départ</th>
                        <th>Distance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bleu</td>
                        <td>
                          <Bleu>{parcours.starter.bleu}</Bleu>
                        </td>
                      </tr>
                      <tr>
                        <td>Blanc</td>
                        <td>
                          <Blanc>{parcours.starter.blanc}</Blanc>
                        </td>
                      </tr>
                      <tr>
                        <td>Or</td>
                        <td>
                          <Or>{parcours.starter.or}</Or>
                        </td>
                      </tr>
                      <tr>
                        <td>Rouge</td>
                        <td>
                          <Rouge>{parcours.starter.rouge}</Rouge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </StyledBoxContent>
              </StyledBox>
            </StyledCard>
          ))}
        </StyledParcours>
      </div>
    </>
  )
}

const StyledParcours = styled.div`
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
  overflow: hidden;
  position: relative;
`

const StyledCard = styled.div`
  border: 2px;
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  float: left;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  position: relative;

  border: 2px solid #ffffff;

  &:hover {
    border: 2px solid #34773a;
    background: linear-gradient(139.73deg, #c4e9c2 0%, #72b46f 100%);
    border-radius: 10px;
  }
`

const Bleu = styled.div`
  background-color: #213ea6;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 3vw;
  color: #e2e2e2;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`

const Blanc = styled.div`
  background-color: #ffffff;
  float: right;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 2px 4px 2px 4px;
  margin-right: 3vw;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`

const Or = styled.div`
  background-color: #e59d11;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 3vw;
  color: #e2e2e2;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`

const Rouge = styled.div`
  background-color: #dc0d00;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 3vw;
  color: #e2e2e2;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`

const Table = styled.table`
  max-width: 100%;
  width: 100%;
  margin-right: 1vw;

  th,
  td {
    border-bottom: 1px solid #34773a;
    color: #000000;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
  }

  th {
    color: #34773a;
    font-size: 1.5vh;
    text-transform: uppercase;
  }

  tr:last-child {
    td {
      border-bottom: 0;
    }
  }
`

const StyledBox = styled.div`
  width: 100%;
`

const StyledBoxContent = styled.div`
  width: 50%;
  float: left;
  position: relative;
`

const StyledNormal = styled.div`
  color: #e2e2e2;
  float: right;
  font-size: 14px;
  top: 0;
  background-color: #34773a;
  padding: 2px 6px;
  border-radius: 10px;
  position: relative;
`

const StyledImages = styled.img`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 5%;
  border: 2px solid #e2e2e2;

  max-height: 100%;
  max-width: 100%;
`

export default Parcours
