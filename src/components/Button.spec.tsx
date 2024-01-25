import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('Button Component', () => {
    // Testar chamada de funções
    it('Should call onClick prop on button click', () => {
        const onClick = jest.fn()

        render(<Button onClick={onClick}>Click me</Button>)

        const button = screen.getByText(/Click me/i)

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalled()
    })
})