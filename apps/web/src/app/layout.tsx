import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ImmoMatch',
  description: 'Real estate matching platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
