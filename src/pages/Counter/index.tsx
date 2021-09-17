import React, { useState } from 'react'

export const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)

  return (
    <>
      <h1>Page Counter</h1>
    </>
  )
}
