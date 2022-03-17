import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import PostComment from '../PostComment';
import {AuthProvider} from '../../contexts/AuthContext'

test('if comment input is empty an error message is displayed', async () => {
    const {getByText} = render(<AuthProvider><PostComment /></AuthProvider> )
  
    fireEvent.click(getByText('Enviar comentario'))
    
    expect(getByText('Tu comentario no puede estar vacío!')).toBeInTheDocument()
  })