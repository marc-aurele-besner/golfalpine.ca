import React from 'react'
import styled from 'styled-components'

const Page404: React.FC = () => {
  return (
    <div className='container' id='about'>
      <StyledPage404>
        <h2>404</h2>
        <p>Page not found</p>
      </StyledPage404>
    </div>
  )
}

const StyledPage404 = styled.div`
  border: 2px;
  width: 90%;
  float: center;
  margin: 20px;
  padding: 20px;
  color: #000000;
  padding: 10px;
  position: relative;
`

export default Page404
