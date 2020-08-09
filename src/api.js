import axios from 'axios';
const API = axios.create({ baseURL: 'https://api.github.com/' })

export function searchRepo(search, sort, order){
  return API.get(`search/repositories?q=${search}&sort=stars&order=desc`)
}
