import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss';
import presetAnimations from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAnimations(),
    presetShadcn({
      color: 'violet',
      radius: 0.1,
    }),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)'], // Use Poppins for the 'sans' family
      mono: ['var(--font-open-sans)'], // Use Open Sans for 'mono' (if needed)
    },
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-col-center': 'flex flex-col items-center justify-center',
    'capitalize-first': 'first-letter:uppercase',
    'heading-1': 'text-4xl font-sans font-bold',
    'heading-2': 'text-3xl font-sans font-medium',
    'heading-3': 'text-2xl font-sans font-medium',
    'heading-4': 'text-xl font-sans font-medium',
    'heading-5': 'text-lg font-sans font-medium',
    'heading-6': 'text-base font-sans font-medium',
    'body-text': 'text-base font-mono',
    'label-text': 'text-xs font-sans font-medium text-muted-foreground',
  },
});
