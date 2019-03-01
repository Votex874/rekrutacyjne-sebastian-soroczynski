import { get } from 'features/api/api';
import { SwapiPlanetResponse } from './models';

export const getCounterFromSwapi = () =>
  get(
    'https://swapi.co/api/people/?search=Skywalker&format=json',
  );
