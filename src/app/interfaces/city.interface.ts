import { Coordinates } from 'src/app/interfaces/coordinates.interface';

export interface City {
  id: number,
  name: string,
  state: string,
  country: string,
  coord: Coordinates
}
