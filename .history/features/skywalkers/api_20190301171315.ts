import { get } from 'features/api/api'
import { response } from 'express';

export const getSkywalkersFromSwapi = () =>
  get('https://swapi.co/api/people/?search=Skywalker&format=json');


export const fetchForSkywalkers = async () => {
  const request = await fetch('https://swapi.co/api/people/?search=Skywalker&format=json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  return json
}
