import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
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
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Open Sans',
        serif: 'DM Serif Display',
        mono: 'Poppins',
      },
    }),
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'flex-col-center': 'flex flex-col items-center justify-center',
  },
});
