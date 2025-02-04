import { Button, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import worldWide from '../src/resources/worldWide.png'

const imageStyling = 
{
  width: '100%',
  height: '50vh',
  objectFit: 'cover'
}

export default function MidCard() 
{
  return (
    <Stack direction = {'column'} spacing = {2} sx = {{marginTop: '50px', width: 'calc(100% - 60px)'}}>
      <Typography variant = 'h6'>Find cheap flights Around the World</Typography>
      <Button 
        variant = "text" 
        sx = 
        {{
          borderRadius: '15px', 
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'white',
          backgroundColor: '#E5F6FD',
          width: '80px', 
        }}>
        Bahrain
      </Button>

      <Grid2>
        <Grid2>
         <img src = {worldWide} alt = 'Description' style = {imageStyling}/>
        </Grid2>
      </Grid2>
    </Stack>
  )
}
