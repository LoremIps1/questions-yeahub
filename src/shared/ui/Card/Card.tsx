import type { HTMLAttributes } from 'react';
import styles from './styles.module.css';
import { cn } from '@/shared/lib/cn';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  isBoxShadow?: boolean;
}

export function Card({ children, className, size = 'lg', ...props }: ICardProps) {
  return (
    <div className={cn(styles.card, styles[size], className)} {...props}>
      {children}
    </div>
  );
}
