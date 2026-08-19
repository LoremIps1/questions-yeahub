import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn';

import styles from './Chip.module.css';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function Chip({ children, selected = false, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(styles.chip, selected && styles.selected, className)}
      aria-pressed={selected}
      {...props}
    >
      {children}
    </button>
  );
}
