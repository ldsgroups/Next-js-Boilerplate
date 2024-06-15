import { Open_Sans, Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'], // Adjust subsets as needed for your audience
  weight: ['400', '500', '600'], // Choose weights you'll use
  display: 'swap', // Optional: For smoother font loading transitions
  variable: '--font-poppins', // Optional: For use with CSS variables
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '300'], // Consider lighter weights for body text
  display: 'swap',
  variable: '--font-open-sans',
});
