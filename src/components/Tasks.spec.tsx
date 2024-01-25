
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

    // Testar requisições na API
    it('Should fetch and show tasks on button click', async () => {
        render(<Tasks />)
        
        const button = screen.getByText(/Get Tasks From API/i)

        fireEvent.click(button)

        await waitFor(() => screen.getByText(/delectus aut autem/i))
        // ou apenas "await screen.findByText(/delectus aut autem/i)
    })
})