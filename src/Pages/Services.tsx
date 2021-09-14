import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'

const GolfBall = () => {
  return (
    <GolfBallContainer>
      <Svg viewBox="0 0 512 512" width="24" height="24">
        <path
          d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
          fill="#F9F5F8"
        />
        <path
          d="M256 298.667c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM346.042 298.667c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM436.111 298.667c14.138 0 25.6-11.461 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6-14.139 0-25.6 11.462-25.6 25.6 0 14.139 11.461 25.6 25.6 25.6zM165.958 298.667c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM75.89 298.667c14.138 0 25.599-11.461 25.599-25.6 0-14.138-11.462-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM306.577 373.333c14.138 0 25.6-11.461 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6-14.139 0-25.6 11.462-25.6 25.6 0 14.139 11.461 25.6 25.6 25.6zM396.644 373.333c14.138 0 25.6-11.461 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6-14.139 0-25.6 11.462-25.6 25.6 0 14.139 11.461 25.6 25.6 25.6zM205.424 373.333c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM115.356 373.333c14.138 0 25.6-11.461 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6-14.139 0-25.6 11.462-25.6 25.6 0 14.139 11.461 25.6 25.6 25.6zM357.177 448c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM256 448c14.139 0 25.6-11.461 25.6-25.6 0-14.138-11.461-25.6-25.6-25.6-14.138 0-25.6 11.462-25.6 25.6 0 14.139 11.462 25.6 25.6 25.6zM154.824 448c14.138 0 25.6-11.461 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6-14.139 0-25.6 11.462-25.6 25.6 0 14.139 11.461 25.6 25.6 25.6z"
          fill="#E3DFE2"
        />
        <path
          d="M408.382 50.284c31.59 42.576 50.284 95.294 50.284 152.382 0 141.385-114.615 256-256 256-57.088 0-109.806-18.694-152.382-50.284C96.93 471.251 171.703 512 256 512c141.385 0 256-114.615 256-256 0-84.297-40.749-159.07-103.618-205.716z"
          fill="#E3DFE2"
        />
      </Svg>
    </GolfBallContainer>
  )
}

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Golf Alpine - Les services</title>
      </Helmet>
      <div className="container" id='about'>
        <StyledCard>
        <h2>
          Les services
        </h2>
        <Table>
          <tbody>
            <tr>
              <td>
                <GolfBall />
                Passe de saison</td>
              <td>
                <GolfBall />
                Boutique de golf</td>
            </tr>
            <tr>
              <td>
                <GolfBall />
                Livrets de parties</td>
              <td>
                <GolfBall />
                Organisation de tournoi</td>
            </tr>
            <tr>
              <td>
                <GolfBall />
                Cartes Cadeaux</td>
              <td>
                <GolfBall />
                Terrain de pratique</td>
            </tr>
            <tr>
              <td>
                <GolfBall />
                Voiturette électrique</td>
              <td>
                <GolfBall />
                Voiturettes à main</td>
            </tr>
            <tr>
              <td>
                <GolfBall />
                Vert de pratique</td>
              <td>
                <GolfBall />
                Location d’équipements</td>
            </tr>
            <tr>
              <td>
                <GolfBall />
                Leçons de golf par un professionnel</td>
              <td>
                <GolfBall />
                Magnifique terrasse</td>
            </tr>
          </tbody>
        </Table>
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
  padding: 0.5vw;
  padding-top: 2vw;
  @media only screen and (max-width: 600px) {
    padding-top: 4vh;
  }
  color: #000000;
  overflow: hidden;
  position: relative;
`;

const GolfBallContainer = styled.span`
  padding-right: 0.5vw;
  position: relative;
`;

const Svg = styled.svg`
  align-self: center;
  flex-shrink: 0;
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;

  th,
  td {
    color: #34773A;
    padding: 3vh;
    &:hover {
      background: linear-gradient(139.73deg, #C4E9C2 0%, #72B46F 100%);
      border-radius: 10px;
    }
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

export default Services