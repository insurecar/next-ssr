import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
    size?: 's' | 'm'
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
    href?: string
    className?: string
}