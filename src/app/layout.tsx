import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './registry';

import '@/styles/globals.css';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vladyslav Tykhoniuk',
  description: 'Full-stack developer',
  keywords: ['Next.js', 'React', 'Full-stack', 'Developer', 'Vladyslav', 'Tykhoniuk', 'Vladyslav Tykhoniuk'],
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
