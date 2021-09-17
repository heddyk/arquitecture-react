import React from 'react'
//import { API } from '../../services/api'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem'
}))

export const Home = (): JSX.Element => {
  /* API.get('/users/octocat/repos', {
    responseType: 'json'
  }).then((response) => console.log(response)) */

  return (
    <Container>
      <Typography variant="h1">Home</Typography>
    </Container>
  )
}
