import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './index'

test('Deve conter título da página', () => {
  render(<Counter />)

  const title = screen.getByText('Página do contador')
  expect(title).toBeInTheDocument()
})

test('Valor do contador deve iniciar com 0', () => {
  render(<Counter />)

  const counter = screen.getByTestId('display-counter')
  expect(counter.innerHTML).toEqual('0')
})

test('Display do contador deve iniciar sem classe increment e decrement', () => {
  render(<Counter />)

  const counter = screen.getByTestId('display-counter')
  expect(counter).not.toHaveClass('counter--increment')
  expect(counter).not.toHaveClass('counter--decrement')
})

test('Deve conter botão incrementar e decrementar', () => {
  render(<Counter />)

  const increment = screen.getByTestId('button-increment')
  const decrement = screen.getByTestId('button-decrement')

  expect(increment).toBeInTheDocument()
  expect(decrement).toBeInTheDocument()
})

test('Deve somar um ao contador quando clicar no botão incrementar ', () => {
  render(<Counter />)

  const increment = screen.getByTestId('button-increment')

  userEvent.click(increment)

  const counter = screen.getByTestId('display-counter')
  expect(counter.innerHTML).toEqual('1')
})

test('Deve diminuir um ao contador quando clicar no botão decrementar ', () => {
  render(<Counter />)

  const decrement = screen.getByTestId('button-decrement')

  userEvent.click(decrement)

  const counter = screen.getByTestId('display-counter')
  expect(counter.innerHTML).toEqual('-1')
})

test('Quando contador for maior que zero deve ter classe counter--increment', () => {
  render(<Counter />)

  const increment = screen.getByTestId('button-increment')

  userEvent.click(increment)

  const counter = screen.getByTestId('display-counter')
  expect(counter).toHaveClass('counter--increment')
})

test('Quando contador for menor que zero deve ter classe counter--decrement', () => {
  render(<Counter />)

  const decrement = screen.getByTestId('button-decrement')

  userEvent.click(decrement)

  const counter = screen.getByTestId('display-counter')
  expect(counter).toHaveClass('counter--decrement')
})
