import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, className, ...props }, ref) => {
    return (
      <div className={cn(styles.wrapper, className)}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

        <input ref={ref} className={styles.input} {...props} />
      </div>
    );
  },
);

Input.displayName = 'Input';
