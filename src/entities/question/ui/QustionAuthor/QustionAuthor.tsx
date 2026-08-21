import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { ROUTES } from '@/shared/config';

interface QustionAuthorProps {
  id: string;
  username: string;
}

export function QustionAuthor({ id, username }: QustionAuthorProps) {
  return (
    <div className={styles.author}>
      Автор: <Link to={ROUTES.profile(id)}>{username}</Link>
    </div>
  );
}
