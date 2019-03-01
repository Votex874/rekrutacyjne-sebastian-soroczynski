import { get } from 'features/api/api'

export const getSkywalkersFromSwapi = () =>
  get('https://swapi.co/api/people/?search=Skywalker&format=json');


export const fetchForSkywalkers = () => {
  fetch('https://swapi.co/api/people/?search=Skywalker&format=json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      const data = res;
      return data
    })
    .catch(err => console.log(err, 'err'))
}
