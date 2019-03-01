import { get } from 'features/api/api'
import { SkywalkersResponse } from './models'

export const getSkywalkersFromSwapi = () =>
  get('https://swapi.co/api/people/?search=Skywalker&format=json');
