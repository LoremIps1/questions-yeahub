import { cn } from '@/shared/lib/cn';
import type { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

interface IBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary';
}

export function Badge({ children, variant = 'default', className, ...props }: IBadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], className)} {...props}>
      {children}
    </span>
  );
}
