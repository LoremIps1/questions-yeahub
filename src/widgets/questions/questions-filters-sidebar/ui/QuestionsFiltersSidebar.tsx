import { SearchQuestions } from '@/features/questions';
import { FilterQuestions } from '@/features/questions/filter-question';
import { Sidebar } from '@/shared/ui/Sidebar';

export function QuestionsFiltersSidebar() {
  return (
    <Sidebar>
      <SearchQuestions />

      <FilterQuestions />
    </Sidebar>
  );
}
