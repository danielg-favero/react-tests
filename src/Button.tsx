import { ReactNode } from "react"

export const Button = ({ disabled, children }: { disabled: boolean, children: ReactNode }) => {
    return <button style={{ backgroundColor: disabled ? 'red' : 'blue' }} >{children}</button>
}