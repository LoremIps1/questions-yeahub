import { Link } from 'react-router-dom';

import { QuestionMetric, type IQuestion, QustionAuthor } from '@/entities/question';

import { ROUTES } from '@/shared/config';
import { Card, Chip, InfoSection } from '@/shared/ui';

import styles from './styles.module.css';

interface QuestionSidebarMetaProps {
  question: IQuestion;
}

export function QuestionSidebarMeta({ question }: QuestionSidebarMetaProps) {
  return (
    <Card className={styles.card}>
      <InfoSection label="Уровень:">
        <QuestionMetric label="Сложность" value={question.complexity} />

        <QuestionMetric label="Рейтинг" value={question.rate} />
      </InfoSection>

      <InfoSection label="Навыки:" className={styles.skills}>
        {question.questionSkills.map((skill) => (
          <Link key={skill.id} to={ROUTES.questionsBySkill(skill.id)}>
            <Chip imageSrc={skill.imageSrc} selected>
              {skill.title}
            </Chip>
          </Link>
        ))}
      </InfoSection>

      <InfoSection label="Ключевые слова:" className={styles.keywords}>
        {question.keywords.map((keyword) => (
          <Link key={keyword} to={ROUTES.questionsByKeyword(keyword)} className={styles.keyword}>
            #{keyword}
          </Link>
        ))}
      </InfoSection>

      <QustionAuthor id={question.createdBy.id} username={question.createdBy.username} />
    </Card>
  );
}
