import { Stack, StyledEngineProvider } from '@mui/material'
import React from 'react'
import Header from './Header'
import Body from './Body'

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
      <Stack direction = {'column'} spacing = {2} sx = {mainWindowStyle}> 
        <Header/>
        <Body/>
      </Stack>
    </StyledEngineProvider>
  )
}
