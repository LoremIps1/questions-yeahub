import { NavLink } from 'react-router-dom';

import { cn } from '@/shared/lib/cn';

import { navigationItems } from '../../config/navigation';

import styles from './styles.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navLinks}>
        {navigationItems.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => cn(styles.link, isActive && styles.active)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
