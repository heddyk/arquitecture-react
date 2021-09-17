import React from 'react'

import { Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'

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
      <Button variant="outlined" onClick={changeTheme}>
        {darkState ? <DarkMode /> : <LightMode />}
      </Button>
    </Container>
  )
}
