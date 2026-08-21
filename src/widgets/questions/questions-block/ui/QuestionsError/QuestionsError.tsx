import ErrorImage from '@/shared/assets/images/error.png?url';
import { Button, Card, StateMessage } from '@/shared/ui';

interface QuestionsErrorProps {
  onRetry: () => void;
}

export function QuestionsError({ onRetry }: QuestionsErrorProps) {
  return (
    <Card style={{ flex: '1' }}>
      <StateMessage
        imageSrc={ErrorImage}
        title="Не удалось загрузить данные"
        description="Попробуйте еще раз, возможно это решит проблему"
        action={<Button onClick={onRetry}>Повторить попытку</Button>}
      />
    </Card>
  );
}
