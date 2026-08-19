import { QuestionAccordion, useGetQuestionsQuery } from '@/entities/question';
import { Card } from '@/shared/ui/Card';
import { Pagination } from '@/shared/ui/Pagination';

import styles from './QuestionsList.module.css';
import { QuestionsListSkeleton } from './QuestionsList.skeleton';
import { QuestionsEmptyState } from '@/widgets/questions/questions-list/ui/QuestionsEmptyState/QuestionsEmptyState';
import { useQuestionFilters } from '@/features/questions/filter-question/model/useQuestionFilters';

export function QuestionsList() {
  const { filters, setPage, resetFilters } = useQuestionFilters();

  const { data, isLoading, isError, error } = useGetQuestionsQuery(filters);

  if (isLoading) {
    return <QuestionsListSkeleton />;
  }

  if (isError || !data) {
    const status = error && 'status' in error ? error.status : 'Неизвестная ошибка';

    return <Card className={styles.wrap}>Ошибка загрузки базы вопросов: {status}</Card>;
  }

  const { data: questions, total, limit, page } = data;

  const totalPages = Math.ceil(total / limit);
  const isEmpty = questions.length === 0;

  return (
    <Card className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.head}>
          <h2 className={styles.title}>База вопросов</h2>
        </div>

        {isEmpty ? (
          <QuestionsEmptyState onReset={resetFilters} />
        ) : (
          questions.map((question) => <QuestionAccordion key={question.id} question={question} />)
        )}
      </div>

      {!isEmpty && <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />}
    </Card>
  );
}
