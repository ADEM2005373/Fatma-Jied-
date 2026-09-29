import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jied Fatma | Portfolio',
  description: 'Portfolio of Jied Fatma, Americas(AME) Market Expansion and Co-sales Manager.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
