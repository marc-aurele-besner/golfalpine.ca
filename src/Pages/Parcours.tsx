import React from 'react'
import styled from 'styled-components'

const parcours = [
  {
    index: 1,
    fairway: 'Trou 1',
    normal: 4,
    startter: {
      bleu: 340,
      blanc: 320,
      or: 255,
      rouge: 245
    }
  },
  {
    index: 2,
    fairway: 'Trou 2',
    normal: 4,
    startter: {
      bleu: 355,
      blanc: 345,
      or: 345,
      rouge: 340
    }
  },
  {
    index: 3,
    fairway: 'Trou 3',
    normal: 4,
    startter: {
      bleu: 425,
      blanc: 405,
      or: 315,
      rouge: 310
    }
  },
  {
    index: 4,
    fairway: 'Trou 4',
    normal: 3,
    startter: {
      bleu: 220,
      blanc: 190,
      or: 140,
      rouge: 135
    }
  },
  {
    index: 5,
    fairway: 'Trou 5',
    normal: 4,
    startter: {
      bleu: 365,
      blanc: 350,
      or: 310,
      rouge: 305
    }
  },
  {
    index: 6,
    fairway: 'Trou 6',
    normal: 5,
    startter: {
      bleu: 450,
      blanc: 435,
      or: 330,
      rouge: 320
    }
  },
  {
    index: 7,
    fairway: 'Trou 7',
    normal: 3,
    startter: {
      bleu: 195,
      blanc: 180,
      or: 145,
      rouge: 140
    }
  },
  {
    index: 8,
    fairway: 'Trou 8',
    normal: 4,
    startter: {
      bleu: 295,
      blanc: 295,
      or: 295,
      rouge: 295
    }
  },
  {
    index: 9,
    fairway: 'Trou 9',
    normal: 5,
    startter: {
      bleu: 465,
      blanc: 465,
      or: 415,
      rouge: 405
    }
  }
]

const Parcours: React.FC = () => {
  return (
    <div className="container" id='about'>
      <StyledParcours>
        <h2>
          Le parcours
        </h2>
        {parcours.map((parcours: any) => (
            <StyledCard>
              <h3>
                Trou {parcours.index}
                <StyledNormal>Par {parcours.normal}</StyledNormal>
              </h3>
              <StyledBox>
                <StyledBoxContent>
                  <StyledImages src={`/img/fairway${parcours.index}.jpg`} alt={parcours.fairway} height="200px" />
                </StyledBoxContent>
                <StyledBoxContent>
                  <Table>
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
                            <Bleu>{parcours.startter.bleu}</Bleu></td>
                        </tr>
                        <tr>
                          <td>Blanc</td>
                          <td><Blanc>{parcours.startter.blanc}</Blanc></td>
                        </tr>
                        <tr>
                          <td>Or</td>
                          <td><Or>{parcours.startter.or}</Or></td>
                        </tr>
                        <tr>
                          <td>Rouge</td>
                          <td><Rouge>{parcours.startter.rouge}</Rouge></td>
                        </tr>
                      </tbody>
                    </Table>
                </StyledBoxContent>
              </StyledBox>
            </StyledCard>
        ))}
      </StyledParcours>
    </div>
  )
}

const StyledParcours = styled.div`
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

  &:hover {
    background-color: #E2E2E2;
    border-radius: 10px;
  }
`;

const Bleu = styled.div`
  background-color: #213EA6;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 10px;
  color: #E2E2E2;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`;

const Blanc = styled.div`
  background-color: #FFFFFF;
  float: right;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 2px 4px 2px 4px;
  margin-right: 10px;
  color: #000000;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`;

const Or = styled.div`
  background-color: #E59D11;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 10px;
  color: #E2E2E2;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`;

const Rouge = styled.div`
  background-color: #DC0D00;
  float: right;
  border-radius: 10px;
  padding: 2px 4px 2px 4px;
  margin-right: 10px;
  color: #E2E2E2;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;
  margin-right: 14px;

  th,
  td {
    border-bottom: 1px solid #34773A;
    color: #000000;
    padding: 16px;
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

const StyledBox = styled.div`
  width: 100%;
`;

const StyledBoxContent = styled.div`
  width: 50%;
  float: left;
  position: relative;
`;

const StyledNormal = styled.div`
  color: #E2E2E2;
  float: right;
  font-size: 14px;
  top: 0;
  background-color: #34773A;
  padding: 2px 6px;
  border-radius: 10px;
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

export default Parcours