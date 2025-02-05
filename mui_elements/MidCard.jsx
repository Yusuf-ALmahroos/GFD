import { Button, Grid2, Stack, Typography } from '@mui/material'
import React from 'react'
import worldWide from '../src/resources/worldWide.png'
import london from '../src/resources/london.png'
import dubai from '../src/resources/dubai.png'
import kuwait from '../src/resources/kuwait.png'
import japan from '../src/resources/japan.png'

const imageStyling = 
{
  width: '100%',
  height: '50vh',
  borderRadius: '15px',
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

      <Grid2 container spacing = {2}>
        <Grid2 size = {{xs: 12, sm: 12, md: 12}}>
         <img src = {worldWide} alt = 'Description' style = {imageStyling}/>
        </Grid2>
        <Grid2 size = {{xs: 12, sm: 12, md: 3}}>
          <FlightsCard 
            image = {london} 
            place = {"London"} 
            price = {"180 BD"}
            describtion = {'Jun 6 - Jun  23 \n1 stop 8  hr 20 min'}/>
        </Grid2>
        <Grid2 size = {{xs: 12, sm: 12, md: 3}}>
          <FlightsCard 
            image = {dubai} 
            place = {"Dubai"} 
            price = {"45 BD"} 
            describtion = {'Feb 16 - March 1 \nNostop 1 hr 30 min'}/>
        </Grid2>
        <Grid2 size = {{xs: 12, sm: 12, md: 3}}>
          <FlightsCard 
            image = {kuwait} 
            place = {"Kuwait"} 
            price = {"30 BD"}
            describtion = {`Feb 10 - Feb 29 \nNostop 1 hr`}/>
        </Grid2>
        <Grid2 size = {{xs: 12, sm: 12, md: 3}}>
          <FlightsCard 
            image = {japan} 
            place = {"Japan"} 
            price = {"350 BD"}
            describtion = {`Mar 22 - Apr 10 \n2 Stops 14 hr`}/>
        </Grid2>
      </Grid2>
    </Stack>
  )
}

function FlightsCard(props)
{
  return (
    <Grid2 container spacing = {2}>
      <Grid2 size = {{xs: 6, sm: 6, md: 12}}>
        <img src = {props.image} style = {{borderRadius: '15px', width : '100%', maxWidth: '300px', maxHeight: 'auto'}}/>
      </Grid2>
      <Grid2 size = {{xs: 6, sm: 6, md: 12}}>
        <Stack direction = {'row'} spacing = {2} justifyContent = {'space-between'} alignItems = {'center'}>
          <Typography variant = 'body1' fontWeight = {'bold'}>{props.place}</Typography>
          <Typography variant = 'body1' fontWeight = {'bold'}>{props.price}</Typography>
        </Stack>
      </Grid2>
      <Grid2 size = {{xs: 12, sm: 12, md: 12}}>
        <Typography variant = 'body1' whiteSpace = {'pre-line'} color = 'grey'>{props.describtion}</Typography>
      </Grid2>
    </Grid2>
  )
}