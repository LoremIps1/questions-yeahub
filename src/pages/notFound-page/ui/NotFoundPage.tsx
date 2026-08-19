import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Container } from '@/shared/ui/Container';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Card style={{ textAlign: 'center' }}>
        <h4>Ошибка 404: страница не найдена</h4>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </Card>
    </Container>
  );
}
