import { Link } from 'react-router-dom';

import type { IQuestion } from '@/entities/question';

import styles from './QuestionMeta.module.css';
import { ROUTES } from '@/shared/config/routes/routes';
import { Badge } from '@/shared/ui/Badge/Badge';
import { Chip } from '@/shared/ui/Chip';

interface QuestionMetaProps {
  question: IQuestion;
}

export function QuestionMeta({ question }: QuestionMetaProps) {
  return (
    <>
      <div className={styles.section}>
        <span className={styles.label}>Уровень:</span>

        <div className={styles.meta}>
          <Badge className={styles.badge}>
            Сложность:
            <Badge variant="primary">{question.complexity}</Badge>
          </Badge>

          <Badge className={styles.badge}>
            Рейтинг:
            <Badge variant="primary">{question.rate}</Badge>
          </Badge>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Навыки:</span>

        <div className={styles.skills}>
          {question.questionSkills.map((skill) => (
            <Link to={ROUTES.questionsBySkill(skill.id)}>
              <Chip imageSrc={skill.imageSrc} selected>
                {skill.title}
              </Chip>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Ключевые слова:</span>

        <div className={styles.keywords}>
          {question.keywords.map((keyword) => (
            <Link to={ROUTES.questionsByKeyword(keyword)}>#{keyword}</Link>
          ))}
        </div>
      </div>

      <div className={styles.author}>
        Автор:{' '}
        <a href={`https://t.me/${question.createdBy.username}`}>{question.createdBy.username}</a>
      </div>
    </>
  );
}
