import { Card } from '@/shared/ui/Card';
import styles from './QuestionsFiltersSidebar.module.css';
import { SearchQuestions } from '@/features/questions';
import { FilterQuestions } from '@/features/questions/filter-question';
export function QuestionsFiltersSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Card className={styles.filters}>
        <SearchQuestions />

        <FilterQuestions />
      </Card>
    </aside>
  );
}
