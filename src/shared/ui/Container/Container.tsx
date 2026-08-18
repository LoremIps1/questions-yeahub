import { cn } from '@/shared/lib/cn';
import styles from './Container.module.css';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
