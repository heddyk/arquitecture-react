import React from 'react'
import { API } from '../../services/api'

export const Home = (): JSX.Element => {
  API.get('/users/octocat/repos', {
    responseType: 'json'
  }).then((response) => console.log(response))

  return <div>Home</div>
}
