import { StyledEngineProvider } from '@mui/material'
import React from 'react'
import Header from './Header'

export default function MainWindow() 
{
  const mainWindowStyle = 
  {
    width: '100%',
    maxWidth: "1000px",
    margin: "0 auto",
    border: "solid 2px black"
  }

  return (
    <StyledEngineProvider injectFirst = {true}>
      <div style = {mainWindowStyle}> 
        <Header/>
      </div>
    </StyledEngineProvider>
  )
}
