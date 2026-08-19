import { Card } from '@/shared/ui/Card';
import styles from './QuestionsList.module.css';
import { cn } from '@/shared/lib/cn';
import { questionsMock } from '@/entities/question/model/mock';
import { QuestionCard } from '@/entities/question';
import { Pagination } from '@/shared/ui/Pagination';
import { useState } from 'react';

export function QuestionsList() {
  const [page, setPage] = useState(1);
  return (
    <Card className={cn(styles.list)}>
      {questionsMock.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}

      <Pagination currentPage={page} totalPages={24} onChange={setPage} />
    </Card>
  );
}
