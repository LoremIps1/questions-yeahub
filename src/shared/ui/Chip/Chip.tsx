import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn';

import styles from './styles.module.css';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  imageSrc?: string;
}

export function Chip({ children, imageSrc, selected = false, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(styles.chip, selected && styles.selected, className)}
      aria-pressed={selected}
      {...props}
    >
      {imageSrc && (
        <img src={imageSrc} alt={String(children)} width={20} height={20} loading="lazy" />
      )}
      {children}
    </button>
  );
}
