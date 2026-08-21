import { Badge } from '@/shared/ui';
import styles from './styles.module.css';

interface QuestionMetricProps {
  label: string;
  value: number;
}

export function QuestionMetric({ label, value }: QuestionMetricProps) {
  return (
    <Badge className={styles.badge}>
      {label}:<Badge variant="primary">{value}</Badge>
    </Badge>
  );
}
