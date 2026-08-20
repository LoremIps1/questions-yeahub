import styles from './Sidebar.module.css';
import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface ISidebarProps {
  children: ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: ISidebarProps) {
  return (
    <aside className={cn(styles.sidebar, className)}>
      <div className={styles.group}>{children}</div>
    </aside>
  );
}
