import { get } from 'features/api/api'

export const getSkywalkersFromSwapi = () =>
  get(
    'https://swapi.co/api/people/?search=Skywalker&format=json',
  );

