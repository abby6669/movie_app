import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import RegisterForm from '../RegisterForm';
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider} from '../../contexts/AuthContext'

test('if password and email inputs are empty an error message is displayed', () => {
  const {getByText} = render(<AuthProvider><Router><RegisterForm /></Router></AuthProvider>)

  fireEvent.click(getByText('Crear una nueva cuenta'))
  
  expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
})

test('if email and password are empty an error message is displayed, then the user changes input values',  () => {
  const {getByText, getByPlaceholderText, queryByText} = render(<AuthProvider><Router><RegisterForm /></Router></AuthProvider> )

  fireEvent.click(getByText('Crear una nueva cuenta'))
  
  expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
  
  fireEvent.change(getByPlaceholderText('Ingresa tu email'), {
      target: {value: 'usuario@gmail.com'}
  })

  fireEvent.change(getByPlaceholderText('Ingresa tu contraseña'), {
      target: {value: '123qwe'}
  })

  fireEvent.click(getByText('Crear una nueva cuenta'))

  expect(queryByText('Por favor ingresa un email y un password')).not.toBeInTheDocument()
  expect(queryByText('Por favor ingresa un email y un password')).toBeNull()

})

test('if password and confirm password dont match an error message is displayed',  () => {
  const {getByText, getByPlaceholderText, queryByText} = render(<AuthProvider><Router><RegisterForm /></Router></AuthProvider> )

  fireEvent.click(getByText('Crear una nueva cuenta'))
  
  expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
  
  fireEvent.change(getByPlaceholderText('Ingresa tu email'), {
      target: {value: 'usuario@gmail.com'}
  })

  fireEvent.change(getByPlaceholderText('Ingresa tu contraseña'), {
      target: {value: '123qwe'}
  })

  fireEvent.click(getByText('Crear una nueva cuenta'))

  expect(queryByText('Por favor ingresa un email y un password')).not.toBeInTheDocument()
  expect(queryByText('Por favor ingresa un email y un password')).toBeNull()

  expect(queryByText('Passwords no coinciden!')).toBeInTheDocument()
})

test('if password and confirm password match after change no error is displayed',  () => {
  const {getByText, getByPlaceholderText, queryByText} = render(<AuthProvider><Router><RegisterForm /></Router></AuthProvider> )

  fireEvent.click(getByText('Crear una nueva cuenta'))
  
  expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
  
  fireEvent.change(getByPlaceholderText('Ingresa tu email'), {
      target: {value: 'usuario@gmail.com'}
  })

  fireEvent.change(getByPlaceholderText('Ingresa tu contraseña'), {
      target: {value: '123qwe'}
  })

  fireEvent.click(getByText('Crear una nueva cuenta'))

  expect(queryByText('Por favor ingresa un email y un password')).not.toBeInTheDocument()
  expect(queryByText('Por favor ingresa un email y un password')).toBeNull()

  expect(queryByText('Passwords no coinciden!')).toBeInTheDocument()

  fireEvent.change(getByPlaceholderText('Confirma tu contraseña'), {
    target: {value: '123qwe'}
  })

  fireEvent.click(getByText('Crear una nueva cuenta'))

  expect(queryByText('Passwords no coinciden!')).not.toBeInTheDocument()
  expect(queryByText('Passwords no coinciden!')).toBeNull()

})