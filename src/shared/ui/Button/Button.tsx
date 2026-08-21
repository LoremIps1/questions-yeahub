import { cn } from '@/shared/lib/cn';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'text' | 'secondary' | 'ghost';
  to?: string;
  size?: 'default' | 'icon';
}

export function Button({
  children,
  variant = 'primary',
  to,
  type = 'button',
  size = 'default',
  className,
  ...props
}: ButtonProps) {
  const buttonClassNames = cn(styles.button, styles[variant], styles[size], className);

  if (to) {
    return (
      <Link to={to} className={buttonClassNames}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={buttonClassNames} {...props}>
      {children}
    </button>
  );
}
