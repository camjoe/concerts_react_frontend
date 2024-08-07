import React, { Fragment } from "react"
import { Concert as ConcertProp, ConcertList } from "./Concert.types"
import { dateToShowtimeString } from "../../utils/formatting"

const Concert: React.FC<ConcertProp> = ({ headlinerBand, supportingBands, date, ticketPrice, venue }) => {
  const showtime = dateToShowtimeString(date);

  return (
    <div>
      <h1>{headlinerBand.name}</h1>
      {supportingBands && supportingBands.length > 0 ? (
        <Fragment>
          <h3>Come See {headlinerBand.name}!</h3>
          <h6>with special guests {supportingBands.toLocaleString()}</h6>
        </Fragment>
      ) : (
        <h3>Come See {headlinerBand.name}!</h3>
      )}
      <h5>{venue.name}</h5>
      <h5>{showtime}</h5>
      <h5>${ticketPrice} - GA Tickets</h5>
    </div>
  )
}

const Concerts: React.FC<ConcertList> = ({ concerts }) => {

  return (
    <ul>
      {concerts.map(concert => (
        <li key={`${concert.id}`}>
          <Concert {...concert} />
        </li>
      ))}
    </ul>
  )
}

export default Concerts