import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './styles.module.css';

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={styles.content} sideOffset={8} align="end">
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  icon?: ReactNode;
};

export function DropdownMenuItem({ icon, children, className, ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item className={`${styles.item} ${className ?? ''}`} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}

      <span>{children}</span>
    </DropdownMenuPrimitive.Item>
  );
}
