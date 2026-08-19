import type { InputHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
}

export function Input({ leftIcon, className, ...props }: InputProps) {
  return (
    <div className={cn(styles.wrapper, className)}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      <input className={styles.input} {...props} />
    </div>
  );
}
