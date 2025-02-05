import { Accordion, Stack, Typography, AccordionSummary, AccordionDetails, Link, Grid2 } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const q1Body = (
  <>
  Finding last-minute flights is easy on Google Flights.
Select your <b>departure</b> and <b>destination</b>cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available.
You can even check for flights departing today.
To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.
  </>);

const q2Body = (
  <>
  It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips.
Just enter your <b>departure</b> and <b>destination</b> cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select <b>Search</b> to see flight options and book the deal.

You can also turn on price tracking to get alerts if the price changes for a route or flight.
  </>
)

const q3Body = (
  <>
  It’s easy to search for flights, even if your plans are up in the air.
1. Tap <b>Explore</b> near the top of the page
2. Then, tap the calendar icon
3. Toggle to <b>Flexible dates</b> and a select a time frame or trip length
4. Tap done
Trip options will appear on the map, with the cheapest available flights highlighted and easy to spot. Tap the destination to see available flight options you can select and book.

Price insights and other useful tools can help you find more options that work for your schedule and budget.
  </>
)

const q4Body = (
  <>
  You can find cheap flight deals to <b>anywhere</b> in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination, and select <b>Explore</b>.
You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear.
You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip.

If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.
  </>
)

const q5Body = (
  <>
  You can track flight prices for specific dates or, if your plans are flexible, any dates. To get flight alerts for a specific round trip, choose your dates and flights and select <b>Search</b>. Then, you can turn on price tracking.
  </>
)

const flightRoutes = 
[
  "Flights from New York to London",
  "Flights from New York to Paris",
  "Flights from London to Paris",
  "Flights from New York to Rome",
  "Flights from Montreal to Paris",
  "Flights from London to Milan",
  "Flights from Toronto to London",
  "Flights from New York to Milan",
  "Flights from London to Dubai",
  "Flights from London to Tokyo",
  "Flights from Madrid to Rome",
  "Flights from London to Delhi",
  "Flights from New York to Los Angeles",
  "Flights from Paris to Marrakech",
  "Flights from Sao Paulo to London",
  "Flights from London to Istanbul",
  "Flights from Paris to Bangkok",
  "Flights from New York to Orlando",
  "Flights from London to Berlin",
  "Flights from Chicago to Paris",
  "Flights from Melbourne to London",
];

export default function BottomCard() 
{
  return (
    <Stack  direction = {'column'} spacing = {4} sx = {{marginTop: '50px', width: 'calc(100% - 60px)'}}>
      <Typography variant = 'h6' fontWeight = {'bold'}>Frequently asked questions</Typography>
      <div>
        <AccordionComponent title = {"How can I find last-minute flight deals?"} body = {q1Body}/>
        <AccordionComponent title = {"How can I find cheap flights for a weekend getaway?"} body = {q2Body}/>
        <AccordionComponent title = {"How can I find flight deals if my travel plans are flexible?"} body = {q3Body}/>
        <AccordionComponent title = {"How can I find cheap flights to anywhere?"} body = {q4Body}/>
        <AccordionComponent title = {"How can I get flight alerts for my trip?"} body = {q5Body}/>
      </div>
      <Typography variant = 'h6' fontWeight = {'bold'} >Find cheap flights on popular routes</Typography>
      <RecommendedFlights flights = {flightRoutes}/>
    </Stack>
  )
}

function AccordionComponent (props)
{
  return (
    <Accordion>
      <AccordionSummary
        expandIcon    ={<ArrowDownwardIcon/>}
        aria-controls ="panel1-content"
        id            ="panel1-header"
      >
        <Typography component = "span" fontWeight = {'bold'}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {props.body}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

function RecommendedFlights (props)
{
  return (
  <Grid2 container>
    {props.flights.map((route, index) => (
      <Grid2 size = {{xs: 12, sm: 6, md: 4, lg: 4}} key = {index}>
        <Link href = "#" underline = "hover">
          <Typography variant = "body1">{route}</Typography>
        </Link>
      </Grid2>
    ))}
  </Grid2>
  )
}