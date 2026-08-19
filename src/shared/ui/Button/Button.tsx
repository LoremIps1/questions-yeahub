import { cn } from '@/shared/lib/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'text' | 'secondary';
  to?: string;
}

export function Button({ children, variant = 'primary', to, className, ...props }: ButtonProps) {
  const buttonClassNames = cn(styles.button, styles[variant], className);

  if (to) {
    return (
      <Link to={to} className={buttonClassNames}>
        {children}
      </Link>
    );
  }
  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
}
