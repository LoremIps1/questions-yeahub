import {
  ComplexityFilter,
  RateFilter,
  SkillsFilter,
  SpecializationFilter,
} from '@/features/questions/filter-questions';
import { Card, InfoSection, Sidebar } from '@/shared/ui';
import { SearchQuestions } from '@/features/questions/search-questions';
import styles from './styles.module.css';

export function QuestionsSidebar() {
  return (
    <Sidebar>
      <Card className={styles.group}>
        <SearchQuestions />

        <InfoSection label="Специализация">
          <SpecializationFilter />
        </InfoSection>

        <InfoSection label="Навыки">
          <SkillsFilter />
        </InfoSection>

        <InfoSection label="Сложность вопросов">
          <ComplexityFilter />
        </InfoSection>

        <InfoSection label="Рейтинг вопроса">
          <RateFilter />
        </InfoSection>
      </Card>
    </Sidebar>
  );
}
