import { Card } from '@/shared/ui/Card';
import styles from './QuestionsFiltersSidebar.module.css';
import { SearchQuestions } from '@/features/questions';
import { Chip } from '@/shared/ui/Chip';
export function QuestionsFiltersSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Card className={styles.filters}>
        <SearchQuestions />

        <div>
          <Chip>fwf</Chip>
          <Chip selected>цвайцуам</Chip>
        </div>
      </Card>
    </aside>
  );
}
