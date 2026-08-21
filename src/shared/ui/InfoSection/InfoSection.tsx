import type { HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.css';
import { cn } from '@/shared/lib/cn';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: ReactNode;
}

export function InfoSection({ label, children, className }: InfoSectionProps) {
  return (
    <div className={styles.section}>
      <span className={styles.label}>{label}</span>

      <div className={cn(styles.content, className)}>{children}</div>
    </div>
  );
}
