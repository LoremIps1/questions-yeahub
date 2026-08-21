import { Link } from 'react-router-dom';

import ArrowLeftIcon from '@/shared/assets/images/icons/arrow-left.svg?url';
import ArrowRightIcon from '@/shared/assets/images/icons/arrow-right.svg?url';
import { ROUTES } from '@/shared/config/routes/routes';
import { Card } from '@/shared/ui/Card';

import styles from './QuestionNavigation.module.css';

interface QuestionNavigationProps {
  previousId?: number;
  nextId?: number;
}

export function QuestionNavigation({ previousId, nextId }: QuestionNavigationProps) {
  return (
    <Card className={styles.navigation}>
      {previousId && (
        <Link to={ROUTES.question(previousId)} className={styles.link}>
          <img src={ArrowLeftIcon} alt="" width={20} height={20} />
          Предыдущий
        </Link>
      )}

      {nextId && (
        <Link to={ROUTES.question(nextId)} className={styles.link}>
          Следующий
          <img src={ArrowRightIcon} alt="" width={20} height={20} />
        </Link>
      )}
    </Card>
  );
}
