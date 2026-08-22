import ErrorImage from '@/shared/assets/images/error.png?url';
import { Button, StateMessage } from '@/shared/ui';

interface QuestionsErrorProps {
  onRetry: () => void;
}

export function QuestionsError({ onRetry }: QuestionsErrorProps) {
  return (
    <StateMessage
      style={{ flex: '1' }}
      imageSrc={ErrorImage}
      title="Не удалось загрузить данные"
      description="Попробуйте еще раз, возможно это решит проблему"
      action={<Button onClick={onRetry}>Повторить попытку</Button>}
    />
  );
}
