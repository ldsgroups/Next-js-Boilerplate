import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LocaleSwitcher from '@/components/locale-switcher';
import { Button } from '@/components/ui/button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function MarketingPage() {
  const t = useTranslations('Marketing');

  return (
    <div className="flex-col-center h-full">
      <LocaleSwitcher />
      <h1 className="text-blue-600 text-2xl font-bold tracking-wide">
        {t('stack')}
      </h1>
      <p className="text-muted-foreground mb-6">{t('description')}</p>
      <Button>{t('shadcn_button_text')}</Button>
    </div>
  );
}
