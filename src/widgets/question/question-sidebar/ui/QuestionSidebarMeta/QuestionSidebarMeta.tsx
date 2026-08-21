import { Link } from 'react-router-dom';

import { QuestionMetric, QustionAuthor, type IQuestion } from '@/entities/question';

import styles from './styles.module.css';
import { Chip } from '@/shared/ui/Chip';
import { Card } from '@/shared/ui/Card';
import { InfoSection } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

interface QuestionMetaProps {
  question: IQuestion;
}

export function QuestionSidebarMeta({ question }: QuestionMetaProps) {
  return (
    <Card className={styles.card}>
      <InfoSection label="Уровень:">
        <QuestionMetric label="Сложность" value={question.complexity} />
        <QuestionMetric label="Рейтинг" value={question.rate} />
      </InfoSection>

      <InfoSection label="Навыки:" className={styles.skills}>
        {question.questionSkills.map((skill) => (
          <Link to={ROUTES.questionsBySkill(skill.id)}>
            <Chip imageSrc={skill.imageSrc} selected>
              {skill.title}
            </Chip>
          </Link>
        ))}
      </InfoSection>

      <InfoSection label="Ключевые слова:" className={styles.keywords}>
        {question.keywords.map((keyword) => (
          <Link to={ROUTES.questionsByKeyword(keyword)} className={styles.keywords}>
            #{keyword}
          </Link>
        ))}
      </InfoSection>

      <QustionAuthor id={question.createdBy.id} username={question.createdBy.username} />
    </Card>
  );
}
