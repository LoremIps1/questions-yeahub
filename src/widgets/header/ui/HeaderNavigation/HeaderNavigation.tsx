import { cn } from '@/shared/lib/cn';
import { navigationItems } from '../../config/navigation';

import { HeaderNavigationLink } from '../HeaderNavigationLink/HeaderNavigationLink';

import styles from './styles.module.css';

interface HeaderNavigationProps {
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
}

export function HeaderNavigation({ onNavigate, variant = 'desktop' }: HeaderNavigationProps) {
  return (
    <nav className={styles.navigation}>
      <ul className={cn(styles.navLinks, styles[variant])}>
        {navigationItems.map(({ label, to }) => (
          <HeaderNavigationLink key={to} link={to} onClick={onNavigate}>
            {label}
          </HeaderNavigationLink>
        ))}
      </ul>
    </nav>
  );
}
