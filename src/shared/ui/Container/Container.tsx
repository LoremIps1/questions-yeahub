import { cn } from '@/shared/lib/cn';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
