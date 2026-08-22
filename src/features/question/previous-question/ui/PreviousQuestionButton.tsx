import { useNavigate, useSearchParams } from 'react-router-dom';

import { ROUTES } from '@/shared/config';
import { Button } from '@/shared/ui';

interface PreviousQuestionButtonProps {
  questionId?: number;
  page?: number;
  isLoading: boolean;
}

export function PreviousQuestionButton({
  questionId,
  page,
  isLoading,
}: PreviousQuestionButtonProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = () => {
    if (!questionId || !page) {
      return;
    }

    const params = new URLSearchParams(searchParams);

    params.set('page', String(page));

    navigate(`${ROUTES.question(questionId)}?${params.toString()}`);
  };

  return (
    <Button
      variant="ghost"
      disabled={isLoading || !questionId || !page}
      onClick={handleClick}
      style={{ color: '#5E5E5E' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
          fill="#5E5E5E"
        />
      </svg>
      Предыдущий
    </Button>
  );
}
