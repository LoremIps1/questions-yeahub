import { SearchQuestions } from '@/features/questions';
import { FilterQuestions } from '@/features/questions/filter-question';
import { Card } from '@/shared/ui/Card';
import { Sidebar } from '@/shared/ui/Sidebar';
import styles from './QuestionsFiltersSidebar.module.css';
export function QuestionsFiltersSidebar() {
  return (
    <Sidebar>
      <Card className={styles.group}>
        <SearchQuestions />
        <FilterQuestions />
      </Card>
    </Sidebar>
  );
}
