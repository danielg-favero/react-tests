import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

const sum = (a: number, b: number) => {
    return a + b
}

describe('App Component', () => {
    // Testar uma função
    it('Should sum correctly', () => {
        expect(sum(4, 4)).toBe(8)
    })

    // Testar a renderização de um componente
    it('Should render App with hello message', () => {
        render(<App />)

        screen.getByText("Hello World!")
    })

    // Testar comportamente de componente
    it('Should change message on button click', () => {
        render(<App />)

        screen.getByText('Isso vai mudar')

        const button = screen.getByText(/Change Message/i)
        fireEvent.click(button)

        screen.getByText(/Mudou/i)
    })

    // Testar estilos
})

export default {}