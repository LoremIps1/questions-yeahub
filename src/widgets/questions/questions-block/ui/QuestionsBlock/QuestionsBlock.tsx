import { useGetQuestionsQuery } from '@/entities/question';

import { useQuestionFilters } from '@/features/questions/filter-questions/model/useQuestionFilters';
import { QuestionsList } from '../QuestionsList/QuestionsList';
import { QuestionsEmpty } from '../QuestionsEmpty/QuestionsEmpty';
import { QuestionsBlockSkeleton } from './QuestionsBlock.skeleton';
import styles from './styles.module.css';
import { QuestionsError } from '../QuestionsError/QuestionsError';
import { Card, Pagination } from '@/shared/ui';

export function QuestionsBlock() {
  const { filters, setPage } = useQuestionFilters();

  const { data, isLoading, isError, refetch } = useGetQuestionsQuery(filters);

  if (isLoading) {
    return <QuestionsBlockSkeleton />;
  }

  if (isError || !data) {
    return <QuestionsError onRetry={refetch} />;
  }

  const { data: questions, total, limit, page } = data;

  const totalPages = Math.ceil(total / limit);
  const isEmpty = questions.length === 0;

  return (
    <Card className={styles.content}>
      {isEmpty ? (
        <QuestionsEmpty />
      ) : (
        <>
          <div>
            <div className={styles.head}>
              <h2 className={styles.title}>База вопросов</h2>
            </div>

            <QuestionsList questions={questions} />
          </div>

          <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </Card>
  );
}
