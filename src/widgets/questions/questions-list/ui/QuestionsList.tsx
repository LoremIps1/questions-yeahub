import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { QuestionAccordion, useGetQuestionsQuery } from '@/entities/question';
import { Card } from '@/shared/ui/Card';
import { Pagination } from '@/shared/ui/Pagination';

import styles from './QuestionsList.module.css';
import { QuestionsListSkeleton } from './QuestionsList.skeleton';

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const { data, isLoading, isError, error } = useGetQuestionsQuery({
    page,
  });

  useEffect(() => {
    if (!searchParams.has('page')) {
      setSearchParams((params) => {
        params.set('page', '1');
        return params;
      });
    }
  }, [searchParams, setSearchParams]);

  const handlePageChange = (nextPage: number) => {
    setSearchParams((params) => {
      params.set('page', String(nextPage));
      return params;
    });
  };

  if (isLoading) {
    return <QuestionsListSkeleton />;
  }

  if (isError || !data) {
    const status = error && 'status' in error ? error.status : 'Неизвестная ошибка';

    return <Card className={styles.wrap}>Ошибка загрузки базы вопросов: {status}</Card>;
  }

  const totalPages = Math.ceil(data.total / data.limit);

  return (
    <Card className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.head}>
          <h2 className={styles.title}>База вопросов</h2>
        </div>

        {data.data.map((question) => (
          <QuestionAccordion key={question.id} question={question} />
        ))}
      </div>

      <Pagination currentPage={data.page} totalPages={totalPages} onChange={handlePageChange} />
    </Card>
  );
}
