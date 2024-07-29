export interface VenueProp {
  id: number,
  name: string,
  location: string
}

export interface BandProp {
  id: number,
  name: string,
  image_url: string
}
export interface ConcertProp {
  id: number,
  headliner_band: BandProp,
  supporting_bands?: BandProp[],
  date : Date,
  ticket_price: number,
  venue: VenueProp[]
}

export interface ConcertListProp {
  concerts: ConcertProp[]
}