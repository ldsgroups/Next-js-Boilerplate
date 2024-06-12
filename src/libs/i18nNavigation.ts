import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { AppConfig } from '@/utils/AppConfig';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AppConfig.locales.map((locale) => locale.code),
  localePrefix: AppConfig.localePrefix,
});
