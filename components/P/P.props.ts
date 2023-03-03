import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import { ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode
    size?: 's' | 'm' | 'l'
}