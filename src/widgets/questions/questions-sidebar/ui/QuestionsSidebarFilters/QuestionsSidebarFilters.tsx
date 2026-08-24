import {
  ComplexityFilter,
  RateFilter,
  SkillsFilter,
  SpecializationFilter,
} from '@/features/questions/filter-questions';
import { SearchQuestions } from '@/features/questions/search-questions';
import { InfoSection } from '@/shared/ui';
import styles from './styles.module.css';

export function QuestionsSidebarFilters() {
  return (
    <div className={styles.group}>
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
    </div>
  );
}
