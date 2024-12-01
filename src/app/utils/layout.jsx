import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Next.js Mail',
  description: 'An email client template using the Next.js App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-white dark:bg-gray-950 text-black dark:text-white"
    >
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}