import React from 'react'
import travel from '../src/resources/travel.png'
import { Stack, Typography, useMediaQuery } from '@mui/material'

const imageStyling = 
{
  width: '100%',
  height: '50vh',
  objectFit: 'cover',
}

export default function Header() 
{
  const isSmallScreen = useMediaQuery("(max-width:600px)")
  return (
    <Stack direction = {'column'} spacing = {1} justifyContent = {'flex-start'} alignItems = {'center'}>
      <img src = {travel} alt = 'Description' style = {imageStyling}/>
      <Typography variant  = {isSmallScreen  ? 'h4'  :  'h3'}>Flights</Typography>
    </Stack>
  )
}
