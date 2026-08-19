import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { QuestionAccordion, useGetQuestionsQuery } from '@/entities/question';
import { Card } from '@/shared/ui/Card';
import { Pagination } from '@/shared/ui/Pagination';

import styles from './QuestionsList.module.css';
import { QuestionsListSkeleton } from './QuestionsList.skeleton';
import { QuestionsEmptyState } from '@/widgets/questions/questions-list/ui/QuestionsEmptyState/QuestionsEmptyState';

export function QuestionsList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('title') ?? '';
  const specializationIdParam = searchParams.get('specializationId');
  const skills = searchParams.get('skills')?.split(',') ?? [];
  const specializationId = specializationIdParam ? Number(specializationIdParam) : undefined;

  const { data, isLoading, isError, error } = useGetQuestionsQuery({
    page,
    title: search,
    specializationId,
    skills: skills.length ? skills : undefined,
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

  const handleResetFilters = () => {
    setSearchParams({
      page: '1',
    });
  };

  if (isLoading) {
    return <QuestionsListSkeleton />;
  }

  if (isError || !data) {
    const status = error && 'status' in error ? error.status : 'Неизвестная ошибка';

    return <Card className={styles.wrap}>Ошибка загрузки базы вопросов: {status}</Card>;
  }

  const { data: questions, total, limit, page: currentPage } = data;
  const totalPages = Math.ceil(total / limit);

  return (
    <Card className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.head}>
          <h2 className={styles.title}>База вопросов</h2>
        </div>

        {questions.length === 0 ? (
          <QuestionsEmptyState onReset={handleResetFilters} />
        ) : (
          questions.map((question) => <QuestionAccordion key={question.id} question={question} />)
        )}
      </div>

      {!(questions.length === 0) && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
      )}
    </Card>
  );
}
