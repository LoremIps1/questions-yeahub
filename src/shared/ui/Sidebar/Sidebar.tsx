import { Card } from '@/shared/ui/Card';
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
      <Card className={styles.group}>{children}</Card>
    </aside>
  );
}
