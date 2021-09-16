import axios from 'axios'

export const API = axios.create({
  /* Defina aqui sua URL padrão */
  baseURL: 'https://api.github.com'
})
