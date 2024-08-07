export interface Venue {
  id: number,
  name: string,
  location: string
}

export interface Band {
  id: number,
  name: string,
  imageUrl: string
}
export interface Concert {
  id: number,
  headlinerBand: Band,
  supportingBands?: Band[],
  date: Date,
  ticketPrice: number,
  venue: Venue
}

export interface ConcertList {
  concerts: Concert[]
}

// Python models stored with snake_case
export interface PythonConcert {
  id: number,
  headliner_band: Band,
  supporting_bands?: Band[],
  date: Date,
  ticket_price: number,
  venue: Venue
}

export function convertFromPython(jsonResult: PythonConcert[]): Concert[] {
  const concerts = jsonResult.map(concert => {
    return <Concert>{
      id: concert.id,
      headlinerBand: concert.headliner_band,
      supportingBands: concert.supporting_bands,
      date: concert.date,
      ticketPrice: Math.trunc(concert.ticket_price),
      venue: concert.venue,
    }
  })

  return concerts;
}