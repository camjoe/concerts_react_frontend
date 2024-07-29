import React from "react"
import { ConcertProp, ConcertListProp } from "./Concert.types"

//TODO:
// map out supporting bands
// convert time to clock
// drop decimals from ticket_price
// fix Concert types camelcase
const Concert: React.FC<ConcertProp> = ({ headliner_band, supporting_bands, date, ticket_price }) => {
  const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })

  return (
    <div>
      <h1>{headliner_band.name}</h1>
      {supporting_bands && supporting_bands.length > 0 ? (
        <h5>Come See {headliner_band.name} with special guests {supporting_bands.toLocaleString()}!</h5>
      ) : (
        <h5>Come See {headliner_band.name}!</h5>
      )}
      <h5>Doors open at {time}</h5>
      <h5>General Admission Tickets ${ticket_price}</h5>
    </div>
  )
}

const Concerts: React.FC<ConcertListProp> = ({ concerts }) => {

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