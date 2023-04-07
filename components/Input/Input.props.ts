import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string
    onChange: () => void
}