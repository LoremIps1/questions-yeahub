import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/cn';
import Chevron from '@/shared/assets/images/icons/chevron.svg?url';
import styles from './styles.module.css';

interface AccordionProps {
  value: string;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Accordion({ value, trigger, children, className }: AccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className={cn(styles.root, className)}>
      <AccordionPrimitive.Item value={value} className={styles.item}>
        <AccordionPrimitive.Header className={styles.header}>
          <AccordionPrimitive.Trigger className={cn(styles.trigger)}>
            <div className={styles.trigerLeft}>
              <span className={styles.beforeTrigger} /> <span>{trigger}</span>
            </div>

            <img src={Chevron} alt="Chevron" className={styles.chevron} />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>

        <AccordionPrimitive.Content className={styles.content}>
          <div className={styles.contentInner}>{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}
