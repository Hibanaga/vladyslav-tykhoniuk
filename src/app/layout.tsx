import { Metadata } from 'next';
import { ReactNode } from 'react';

import StyledComponentsRegistry from './registry';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Vladyslav Tykhoniuk',
  description: 'Full-stack developer',
  keywords: ['Next.js', 'React', 'Full-stack', 'Developer'],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
