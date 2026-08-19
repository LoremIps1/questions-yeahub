import EmptySearchImage from '@/shared/assets/images/empty.png?url';
import { Button } from '@/shared/ui/Button';
import styles from './QuestionsEmptyState.module.css';
import { Card } from '@/shared/ui/Card';

interface QuestionsEmptyStateProps {
  onReset: () => void;
}

export function QuestionsEmptyState({ onReset }: QuestionsEmptyStateProps) {
  return (
    <Card className={styles.empty}>
      <img
        className={styles.img}
        src={EmptySearchImage}
        alt="Not found"
        loading="lazy"
        width={186}
        height={186}
      />
      <h3 className={styles.title}>К сожалению, по запросу ничего не найдено.</h3>

      <p className={styles.description}>
        Попробуйте изменить запрос или воспользуйтесь нашими категориями.
      </p>

      <Button variant="secondary" onClick={onReset}>
        Сбросить фильтр
      </Button>
    </Card>
  );
}
