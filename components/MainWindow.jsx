import { Stack, StyledEngineProvider } from '@mui/material'
import React, { createContext, useEffect, useState } from 'react'
import Header from './Header'
import Body from './Body'

import axios from 'axios'

export const mainContext = createContext();

export default function MainWindow() 
{
  const [countriesInfo, setCountriesInfo] = useState([]);
  const [flights, setFlights]             = useState({});

  const options = 
  {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/getConfig',
    headers: 
    {
      'x-rapidapi-key': 'f06d9f238fmshc14231bca729243p115a04jsn7e7634f301a1',
      'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
    }
  };

  const getchCountriesInfo = async () => 
  {
    try
    {
    	const response = await axios.request(options);
      console.log(response.data)
      if(response.data.status)
      {
        setCountriesInfo(response.data.data)
      }
    }
    catch (error)
    {
      console.log(error);
    }
  }

  useEffect(() => 
  {
    getchCountriesInfo();

    return () => {}
  }, [])

  const mainWindowStyle = 
  {
    width: '100%',
    maxWidth: "1000px",
    margin: "0 auto",
    border: "solid 2px black"
  }

  return (
    <mainContext.Provider value = {{state: countriesInfo}}>
      <Stack direction = {'column'} spacing = {2} sx = {mainWindowStyle}> 
        <Header/>
        <Body/>
      </Stack>
    </mainContext.Provider>
  )
}
