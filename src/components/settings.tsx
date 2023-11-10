import { cn } from '@/lib/utils';

import { Icons } from './icons';
import LanguageSwitcher from './language-switcher';
import { ThemeSwitcher } from './theme-switcher';

interface SettingsPros extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Settings({ className }: SettingsPros) {
  return (
    <div className={cn('flex items-center justify-end gap-4', className)}>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
}

export default Settings;
