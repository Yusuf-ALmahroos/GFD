import { InputAdornment, Grid2, Stack, TextField, Button, } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
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
import { mainContext } from '../components/MainWindow';

import axios from 'axios'

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
  const [date, setDate]                 = useState(dayjs());
  const [countryFrom, setCountryFrom]   = useState("Where From?");
  const [countryTo, setcountryTo]       = useState("Where To?");

  const context = useContext(mainContext);

  const findAirport = (ogObj, distObj) => 
  {   
    return new Promise((resolve, reject) => 
    {
      const airPortsInfo = 
      {
        originSkyId: '',
        destinationSkyId: '',
        originEntityId: '',
        destinationEntityId: '',
        currency: ogObj.currency,
        market: ogObj.market,
        countryCode: ogObj.countryCode
      }
      axios.request(
      {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: {
          query: 'new',
          locale: ogObj.market
        },
        headers: {
          'x-rapidapi-key': 'f06d9f238fmshc14231bca729243p115a04jsn7e7634f301a1',
          'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
        }
      })
      .then((response) => 
      {
        if(response.data.status)
        {
          const data = response.data.data[0]
          airPortsInfo.originSkyId    = data.skyId;
          airPortsInfo.originEntityId = data.entityId;
        }
        return axios.request(
        {
          method: 'GET',
          url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
          params: {
            query: 'new',
            locale: distObj.market
          },
          headers: {
            'x-rapidapi-key': 'f06d9f238fmshc14231bca729243p115a04jsn7e7634f301a1',
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
          }
        })
      })
      .then((response) => 
      {
        if(response.data.status)
        {
          const data = response.data.data[0]
          airPortsInfo.destinationSkyId    = data.skyId;
          airPortsInfo.destinationEntityId = data.entityId;
        }
      })
      .catch((err) => {console.log(err)})
      .finally(() => 
      {
        console.log(airPortsInfo)
        getFlights(airPortsInfo);
      })
    })
  }

  const getFlights = async (airPortsInfo) =>
  {
    const flightOptions = {
      method: 'GET',
      url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        originSkyId: airPortsInfo.originSkyId,
        destinationSkyId: airPortsInfo.destinationSkyId,
        originEntityId: airPortsInfo.originEntityId,
        destinationEntityId: airPortsInfo.destinationEntityId,
        date: date,
        cabinClass: flightType.toLowerCase(),
        adults: personsCount.adults || 1,
        sortBy: 'Best',
        currency: airPortsInfo.currency,
        market: airPortsInfo.market,
        countryCode: airPortsInfo.countryCode
      },
      headers: {
        'x-rapidapi-key': 'f06d9f238fmshc14231bca729243p115a04jsn7e7634f301a1',
        'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
      }
    };
    
    try 
    {
      const response = await axios.request(flightOptions);
      console.log(response.data)
    } 
    catch(error) 
    {
      console.error(error);
    }
  }

  function handleTripTypeChange(event)
  {
    setTripType(event.target.value)
  }

  function handleFlightTypeChange(event)
  {
    setFlightType(event.target.value)
  }

  function handleExploreClick()
  {
    const ogCountryObj = context.state.find(obj => obj.country  === countryFrom);
    const distCountryObj = context.state.find(obj => obj.country  === countryTo);
    if(ogCountryObj && distCountryObj)
    {
      findAirport(ogCountryObj, distCountryObj);
    }
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
          startIcon = {<SearchIcon/>}
          onClick   = {handleExploreClick}
          >
          Explore
        </Button>
    </Stack>
  )
}