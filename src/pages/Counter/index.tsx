import React, { useState } from 'react'
/* Material */
import { Button, ButtonGroup, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import './style.css'

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

      <Typography
        variant="h1"
        component="div"
        data-testid="display-counter"
        className={
          counter > 0
            ? 'counter--increment'
            : counter < 0
            ? 'counter--decrement'
            : ''
        }
      >
        {counter}
      </Typography>

      <ButtonGroup
        variant="outlined"
        aria-label="Grupo de botões para controle do contador"
      >
        <Button
          variant="outlined"
          data-testid="button-decrement"
          onClick={() => setCounter(counter - 1)}
        >
          Decrementar (-1)
        </Button>
        <Button
          variant="outlined"
          data-testid="button-increment"
          onClick={() => setCounter(counter + 1)}
        >
          Incrementar (+1)
        </Button>
      </ButtonGroup>
    </Container>
  )
}
