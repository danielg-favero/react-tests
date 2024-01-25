import { ReactNode } from "react"

interface IButtonProps {
    disabled?: boolean
    children: ReactNode
    onClick?: () => void
}

export const Button = ({ disabled = false, children, onClick }: IButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: disabled ? 'red' : 'blue' }} 
        >
            {children}
        </button>
    )
}