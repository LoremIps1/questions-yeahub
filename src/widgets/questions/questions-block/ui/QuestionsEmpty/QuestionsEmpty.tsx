import EmptySearchImage from '@/shared/assets/images/empty.png?url';
import { Card, StateMessage } from '@/shared/ui';
import { ResetFilters } from '@/features/questions/filter-questions';

export function QuestionsEmpty() {
  return (
    <Card>
      <StateMessage
        imageSrc={EmptySearchImage}
        title="К сожалению, по запросу ничего не найдено."
        description="Попробуйте изменить запрос или воспользуйтесь нашими категориями."
        action={<ResetFilters />}
      />
    </Card>
  );
}
