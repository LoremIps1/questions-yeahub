import type { ReactNode } from 'react';
import { Card } from '../Card/Card';
import styles from './styles.module.css';

interface StateMessageProps {
  imageSrc: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function StateMessage({ imageSrc, title, description, action }: StateMessageProps) {
  return (
    <Card className={styles.content}>
      <img
        className={styles.img}
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
