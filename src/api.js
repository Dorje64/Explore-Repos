import axios from 'axios';
const API = axios.create({ baseURL: 'https://api.github.com/' })

export function searchRepo(search, sort, order, page){
  return API.get(`search/repositories?q=${search}&sort=${sort}&order=${order}&per_page=${25}&page=${page}`)
}

export function getRepo(url){
  return API.get(url)
}