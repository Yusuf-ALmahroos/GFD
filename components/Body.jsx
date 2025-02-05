import React from 'react'
import FormCard from '../mui_elements/FormCard'
import MidCard from '../mui_elements/MidCard'
import BottomCard from '../mui_elements/BottomCard'

export default function Body() 
{
  return (
    <div style = {{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <FormCard/>
      <MidCard/>
      <BottomCard/>
    </div>
  )
}
