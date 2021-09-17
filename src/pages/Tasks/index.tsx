import React from 'react'

import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem'
}))

export const Tasks = (): JSX.Element => {
  return (
    <Container>
      <Typography variant="h1">Tasks</Typography>
    </Container>
  )
}
