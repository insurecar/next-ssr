import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearence: 'primary' | 'ghost'
    className?: string
    arrow?: 'right' | 'down' | 'none'
}