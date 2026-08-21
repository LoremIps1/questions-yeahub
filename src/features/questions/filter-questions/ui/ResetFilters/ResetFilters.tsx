import { Button } from '@/shared/ui';
import { useQuestionFilters } from '../../model/useQuestionFilters';

export function ResetFilters() {
  const { resetFilters } = useQuestionFilters();
  return (
    <Button variant="secondary" onClick={resetFilters}>
      Сбросить фильтр
    </Button>
  );
}
