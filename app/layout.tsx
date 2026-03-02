import type { Metadata } from 'next'
import { Montserrat, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
// import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
// import 'tailwindcss/tailwind.css'

const displayFont = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pranav Gurram | Software Developer',
  description: 'Premium portfolio showcasing modern web development projects and skills',
  keywords: ['web developer', 'software engineer', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Pranav Gurram' }],
  openGraph: {
    title: 'Pranav Gurram | Software Developer',
    description: 'Premium portfolio showcasing modern web development projects and skills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Gurram | Software Developer',
    description: 'Premium portfolio showcasing modern web development projects and skills',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${displayFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <ScrollProgress />
          {/* <CustomCursor /> */}
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}