import { cn } from '@/lib/utils';

import { ThemeSwitcher } from './theme-switcher';

interface SettingsPros extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Settings({ className }: SettingsPros) {
  return (
    <div className={cn('flex items-center justify-end gap-2', className)}>
      <ThemeSwitcher />
    </div>
  );
}

export default Settings;
