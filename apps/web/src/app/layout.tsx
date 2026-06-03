import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'ImmoMatch',
  description: 'Real estate matching platform',
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
