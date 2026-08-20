import type { IQuestion } from '@/entities/question';
import { Sidebar } from '@/shared/ui/Sidebar';
import { QuestionMeta } from '@/widgets/question/question-sidebar/ui/QuestionMeta/QuestionMeta';

interface QuestionSidebarProps {
  question: IQuestion;
}

export function QuestionSidebar({ question }: QuestionSidebarProps) {
  return (
    <Sidebar>
      <QuestionMeta question={question} />
    </Sidebar>
  );
}
