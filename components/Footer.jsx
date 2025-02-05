import { Grid2, Stack, Button, Typography } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoneyIcon from '@mui/icons-material/Money';

export default function Footer() 
{
  return (
    <Stack direction = {'column'} sx = {{width: '100%'}}>
      <div style = {{borderTop: 'solid 1px grey', margin: '20px 0'}}></div>
      <Grid2 
        container 
        spacing = {2} 
        justifyContent = {'space-around'} 
        alignItems = {'center'}
        sx={{ flexWrap: 'wrap' }} 
      >
        <Grid2 size = {{xs: 6, sm: 6, md: 4}} sx = {{display: 'flex', width:'100%', justifyContent: 'center'}}>
          <Button 
            variant = "outlined"
            size = 'small'
            sx = 
            {{
              margin: '0px auto',
              fontSize: '11px',
              minWidth: '300px',
              borderRadius: '15px'
            }}
            startIcon = {<LanguageIcon/>}
            >
            {"Language . English (United States)"}
          </Button>
        </Grid2>
        <Grid2 size = {{xs: 6, sm: 6, md: 4}} sx = {{display: 'flex', width:'100%', justifyContent: 'center'}}>
          <Button 
            variant = "outlined"
            size = 'small'
            sx = 
            {{
              margin: '0px auto',
              fontSize: '11px',
              minWidth: '150px',
              borderRadius: '15px'
            }}
            startIcon = {<FmdGoodOutlinedIcon/>}
            >
            {"Location . Bahrain"}
          </Button>
        </Grid2>
        <Grid2 size = {{xs: 12, sm: 12, md: 4}} sx = {{ display: 'flex', width:'100%', justifyContent: 'center'}}>
          <Button 
            variant = "outlined"
            size = 'small'
            sx = 
            {{
              margin: '0px auto',
              fontSize: '11px',
              minWidth: '120px',
              borderRadius: '15px'
            }}
            startIcon = {<MoneyIcon/>}
            >
            {"Currency . BHD"}
          </Button>
        </Grid2>
      </Grid2>
      <Typography variant = 'body2' color = 'grey' whiteSpace = {'pre-line'} sx = {{margin: '20px auto'}} textAlign={'center'}>
        {`Current language and currency options applied: English (United States) - Bahrain - BHD
        Displayed currencies may differ from the currencies used to purchase flights. Learn more`}
      </Typography>
      <Stack direction = {'row'} spacing = {0.5} sx = {{margin: '0 auto'}}>
        <Button variant = "text" sx = {{fontSize: '11px'}}>About</Button>
        <Button variant = "text" sx = {{fontSize: '11px'}}>Privacy</Button> 
        <Button variant = "text" sx = {{fontSize: '11px'}}>Terms</Button>
        <Button variant = "text" sx = {{fontSize: '11px'}}>Join user studies</Button>
        <Button variant = "text" sx = {{fontSize: '11px'}}>Feedback</Button>
        <Button variant = "text" sx = {{fontSize: '11px'}}>Help Center</Button>
      </Stack>
      <div style = {{borderTop: 'solid 1px grey', margin: '20px 0'}}></div>
    </Stack>
  )
}