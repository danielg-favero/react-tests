
import { fireEvent, render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { Tasks } from './Tasks'

describe('Task Component', () => {
    const handler = http.get('https://jsonplaceholder.typicode.com/todos', () => {
        return HttpResponse.json({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        })
    })

    const worker = setupServer(handler)

    // Esse código será executado sempre antes dos testes
    beforeAll(() => {
        worker.listen()
    })

    // Esse código será executado antes de cada teste
    beforeEach(() => {
        worker.resetHandlers()
    })

    // Testar requisições na API
    it('Should fetch and show tasks on button click', async () => {
        render(<Tasks />)
        
        const button = screen.getByText(/Get Tasks From API/i)

        fireEvent.click(button)

        await screen.findByText(/delectus aut autem/i)
        // ou apenas await waitFor(() => screen.getByText(/delectus aut autem/i))
    })

    // Testar erros de requisição
    it('Should show error message on fetch error', async () => {
        worker.use(http.get('https://jsonplaceholder.typicode.com/todos', () => {
            return new HttpResponse(null, { status: 500 })
        }))

        render(<Tasks />)

        const button = screen.getByText(/Get Tasks From API/i)

        fireEvent.click(button)

        await screen.findByText("Request failed with status code 500")
    })
})