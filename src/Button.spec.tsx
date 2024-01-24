import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe('Button Component', () => {
    // Testar Estilos
    it('Should render red background on disabled', () => {
        render(<Button disabled>Click me</Button>)

        const button = screen.getByText("Click me")

        expect(button).toHaveStyle({ backgroundColor: 'red' })
    })
})