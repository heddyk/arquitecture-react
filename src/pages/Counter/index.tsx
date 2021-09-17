import React, { useState } from 'react'
/* Material */
import { Button, ButtonGroup, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem'
}))

export const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <Container>
      <h1>Página do contador</h1>

      <Typography variant="h1" component="div" gutterBottom>
        {counter}
      </Typography>

      <ButtonGroup
        variant="outlined"
        aria-label="Grupo de botões para controle do contador"
      >
        <Button variant="outlined" onClick={() => setCounter(counter + 1)}>
          Incrementar
        </Button>
        <Button variant="outlined" onClick={() => setCounter(counter - 1)}>
          Decrementar
        </Button>
      </ButtonGroup>
    </Container>
  )
}
