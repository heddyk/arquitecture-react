import React from 'react'

import { Typography, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'

interface HeaderProps {
  darkState: boolean
  changeTheme: () => void
  children?: React.ReactNode
}

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
}))

export const Header: React.FC<HeaderProps> = ({
  darkState,
  changeTheme
}): JSX.Element => {
  return (
    <Container>
      <Typography variant="h2">Header</Typography>
      <ButtonGroup variant="outlined">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/home">Home</Link>
        </Button>
        <Button>
          <Link to="/tasks">Tasks</Link>
        </Button>
        <Button>
          <Link to="/tasks/1">Task ID 1</Link>
        </Button>
        <Button>
          <Link to="/counter">Counter</Link>
        </Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={changeTheme}>
        {darkState ? <LightMode /> : <DarkMode />}
      </Button>
    </Container>
  )
}
