import { ChipSkeleton } from '@/shared/ui';

export function SpecializationFilterSkeleton() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {Array.from({ length: 5 }, (_, index) => (
        <ChipSkeleton key={index} />
      ))}
    </div>
  );
}
