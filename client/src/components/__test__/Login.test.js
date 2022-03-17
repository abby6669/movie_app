import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import Login from '../../views/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider} from '../../contexts/AuthContext'

test('if email and password are empty an error message is displayed', async () => {
    const {getByText} = render(<AuthProvider><Router><Login /></Router></AuthProvider> )

    fireEvent.click(getByText('Log In'))
    
    expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
})

test('if email and password are empty an error message is displayed, then the user changes input values', async () => {
    const {getByText, getByPlaceholderText, queryByText} = render(<AuthProvider><Router><Login /></Router></AuthProvider> )

    fireEvent.click(getByText('Log In'))
    
    expect(getByText('Por favor ingresa un email y un password')).toBeInTheDocument()
    
    fireEvent.change(getByPlaceholderText('Enter email'), {
        target: {value: 'usuario@gmail.com'}
    })

    fireEvent.change(getByPlaceholderText('Password'), {
        target: {value: '123qwe'}
    })

    fireEvent.click(getByText('Log In'))

    expect(queryByText('Por favor ingresa un email y un password')).not.toBeInTheDocument()
    expect(queryByText('Por favor ingresa un email y un password')).toBeNull()

})