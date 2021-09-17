import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { useParams } from 'react-router'

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem'
}))

export const Task = (): JSX.Element => {
  const { taskId } = useParams<{ taskId: string }>()

  return (
    <Container>
      <Typography variant="h1">Task : {taskId}</Typography>
    </Container>
  )
}
