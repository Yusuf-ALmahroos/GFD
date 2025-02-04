import React from 'react'
import FormCard from '../mui_elements/FormCard'
import MidCard from './MidCard'

export default function Body() 
{
  return (
    <div style = {{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <FormCard/>
      <MidCard/>
    </div>
  )
}
