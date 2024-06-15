import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

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
    <div className="h-full w-full flex flex-col p-2">
      <header>
        <nav className="flex flex-row items-center justify-between">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Menu Cool
          </h1>

          <div className="flex flex-row items-center gap-x-2">
            <Button size="sm">
              <Link href="/signup">
                <p className="capitalize-first">{t('getStarted')}</p>
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <div>
        <div className="py-16 lg:py-32 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
            <div className="text-center">
              <div className="capitalize-first text-4xl text-foreground font-bold tracking-tight md:text-6xl sm:text-5xl">
                <h1 className="text-primary">{t('titleHighlight')}</h1>

                <p> {t('titleNormal')}</p>
              </div>
              <p className="capitalize-first mx-auto mt-3 max-w-md text-base text-muted-foreground md:mt-5 md:max-w-3xl md:text-xl sm:text-lg">
                {t('description')}
              </p>
              <div className="mx-auto mt-5 max-w-md md:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/signup">
                      <span className="capitalize-first">
                        {t('tryForFree')}
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <figure className="mx-auto max-w-7xl lg:px-8 sm:px-6">
          <div className="relative">
            <Image
              alt="Hero Image"
              className="h-auto w-full rounded-lg object-cover"
              height="4000"
              sizes="(min-width: 1440px)970px, (min-width: 1024px)709px, (min-width: 768px)620px, calc(100vw - 30px)"
              src="/hero-image.jpeg"
              width="6000"
            />

            <div className="absolute bottom-0 right-0">
              <Image
                alt=""
                className="rounded-lg object-cover shadow"
                height="117"
                src="/hero-image-little1.png"
                width="149"
              />
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
