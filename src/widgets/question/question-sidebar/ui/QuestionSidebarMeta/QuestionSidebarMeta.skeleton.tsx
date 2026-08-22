import { Card, InfoSectionSkeleton } from '@/shared/ui';

import styles from './styles.module.css';

export function QuestionSidebarMetaSkeleton() {
  return (
    <Card className={styles.card}>
      {Array.from({ length: 4 }, (_, index) => (
        <InfoSectionSkeleton key={index} />
      ))}
    </Card>
  );
}
