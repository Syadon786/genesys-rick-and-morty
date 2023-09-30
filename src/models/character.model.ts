export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Status = 'Dead' | 'Alive' | 'unknown';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}
