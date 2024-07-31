import React from "react"
import { Concert as ConcertProp, ConcertList} from "./Concert.types"

//TODO:
// map out supporting bands
// convert time to clock
// drop decimals from ticket_price
// fix Concert types camelcase
const Concert: React.FC<ConcertProp> = ({ headlinerBand, supportingBands, date, ticketPrice, venue }) => {
  const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })

  return (
    <div>
      <h1>{headlinerBand.name}</h1>
      {supportingBands && supportingBands.length > 0 ? (
        <h5>Come See {headlinerBand.name} with special guests {supportingBands.toLocaleString()}!</h5>
      ) : (
        <h5>Come See {headlinerBand.name}!</h5>
      )}
      <h5>{venue.name}: Doors open at {time}</h5>
      <h5>General Admission Tickets ${ticketPrice}</h5>
    </div>
  )
}

const Concerts: React.FC<ConcertList> = ({ concerts }) => {

  return (
    <ul>
      {concerts.map(concert => (
        <li key={`${concert.id}`}>
          <Concert {...concert}/>
        </li>
      ))}
    </ul>
  )
}

export default Concerts