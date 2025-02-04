import { InputAdornment, Grid2, Stack, TextField, Button, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SmallInputSelect, DropdownMenu } from './InputFields'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PersonIcon from '@mui/icons-material/Person';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

const tripTypes = 
[
  'Round Trip',
  'One Way',
  'Multi-City',
]

const flightTypes = 
[
  'Economy',
  'Premium economy',
  'Busniess',
  'First'
]

const persons = 
[
  'Adults',
  'Children (Aged 2 - 11)',
  'Infants (In seat)',
  'Infants (On lap)'      
]


const url = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=19.242218017578125&lng=72.85846156046128&locale=en-US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f06d9f238fmshc14231bca729243p115a04jsn7e7634f301a1',
		'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
	}
};

export default function FormCard() 
{
  const [tripType, setTripType]         = useState(tripTypes[0]);
  const [personsCount, setPersonsCount] = useState(
  {
    adults: 0,
    children: 0,
    infantsInSeat: 0,
    infantsOnLap: 0
  })
  const [flightType, setFlightType]     = useState(flightTypes[0]);
  const [nearBy,   setNearBy]           = useState([]);
  const [date, setDate]                 = useState(dayjs());
  const [countryFrom, setCountryFrom]   = useState("Where From?");
  const [countryTo, setcountryTo]       = useState("Where To?");

  const fetchData = async () => 
  {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setNearBy(result.data.nearby);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => 
  {
    fetchData();

    return () => {}
  }, []);

  function handleTripTypeChange(event)
  {
    setTripType(event.target.value)
  }

  function handleFlightTypeChange(event)
  {
    setFlightType(event.target.value)
  }

  return (
    <Stack sx = {
      {
        width: 'calc(100% - 120px)',
        background: 'white',
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3), -4px 4px 10px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
        paddingX: '30px',
        paddingY: '15px',
        position: 'relative'
      }}  
      direction = {'column'} 
      spacing   = {4}
    >
      <Stack direction = {'row'} spacing = {1}>
        <SmallInputSelect 
          boxWodth = {'150px'}
          value    = {tripType}
          icon     = {<SwapHorizIcon/>}
          onChange = {handleTripTypeChange}
          options  = {tripTypes}
        />

        <DropdownMenu
          options     = {persons}
          value       = {personsCount}
          onChange    = {setPersonsCount}
          buttonLabel = {""}
          icon        = {<PersonIcon/>}
        />

        <SmallInputSelect 
          boxWodth = {'150px'}
          value    = {flightType}
          icon     = {<FlightClassIcon/>}
          onChange = {handleFlightTypeChange}
          options  = {flightTypes}
        />
      </Stack>

      <Grid2 container spacing = {2} sx={{paddingBottom: '30px'}}>
        <Grid2 size = {{xs: 6, sm: 6, md: 4}}>
          <TextField 
            fullWidth 
            value    = {countryFrom} 
            variant  = "outlined" 
            onChange = {(event)=> {setCountryFrom(event.target.value)}}
            slotProps = {{
              input: {
                startAdornment: (
                  <InputAdornment position = "start">
                    <CircleOutlinedIcon/>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid2>

        <Grid2 size = {{xs: 6, sm: 6, md: 4}}>
          <TextField 
            fullWidth 
            value    = {countryTo} 
            variant  = "outlined" 
            onChange = {(event)=> {setcountryTo(event.target.value)}}
            slotProps = {{
              input: {
                startAdornment: (
                  <InputAdornment position = "start">
                    <FmdGoodOutlinedIcon/>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid2>

        <Grid2 size = {{xs: 12, sm: 12, md: 4}}>
          <LocalizationProvider dateAdapter = {AdapterDayjs}>
            <DatePicker
              value    = {date}
              onChange = {(newValue) => setDate(newValue)} 
              sx       = {{width: '100%'}}
            />
          </LocalizationProvider>
        </Grid2>
      </Grid2>

        <Button 
          variant = "contained"
          sx = 
          {{
            position: 'absolute',
            right: '43%',
            left: '43%',
            top: '72%',
            borderRadius: '15px'
          }}
          startIcon = {<SearchIcon/>}>
          Explore
        </Button>
    </Stack>
  )
}