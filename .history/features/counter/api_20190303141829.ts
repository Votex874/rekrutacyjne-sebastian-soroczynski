import { get } from 'features/api/api';

export const getCounterFromSwapi = () =>
  get(
    'https://swapi.co/api/planets/3/',
  );
