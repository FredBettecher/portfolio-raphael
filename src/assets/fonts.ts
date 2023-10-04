import { Lato, Montserrat, Roboto } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

export { lato, montserrat, roboto };
 