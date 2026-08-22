import type { HTMLAttributes, ReactNode } from 'react';
import { Card } from '../Card/Card';
import styles from './styles.module.css';
import { cn } from '@/shared/lib/cn';

interface StateMessageProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function StateMessage({
  imageSrc,
  title,
  description,
  className,
  action,
  ...props
}: StateMessageProps) {
  return (
    <Card className={styles.content} {...props}>
      <img
        className={cn(styles.img, className)}
        src={imageSrc}
        alt="Not found"
        loading="lazy"
        width={186}
        height={186}
      />
      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {action && <div className={styles.action}>{action}</div>}
    </Card>
  );
}
