import { cn } from '@/shared/lib/cn';

import styles from './Pagination.module.css';
import ArrowLeft from '@/shared/assets/images/icons/arrow-left.svg?url';
import ArrowRight from '@/shared/assets/images/icons/arrow-right.svg?url';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onChange }: PaginationProps) {
  return (
    <nav className={styles.pagination} aria-label="Пагинация">
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrow}
      >
        <img src={ArrowLeft} alt="arrow-left" width={20} height={20} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            className={cn(styles.page, currentPage === page && styles.active)}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrow}
      >
        <img src={ArrowRight} alt="arrow-left" width={20} height={20} />
      </button>
    </nav>
  );
}
