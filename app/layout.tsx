import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/providers/theme-provider"
import "./globals.css"
import { structuredData } from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dio Fajrie Fadlullah | Software Engineer & Photographer in Jakarta",
  description: "Dio Fajrie Fadlullah is a Software Engineer and Photographer based in Jakarta, Indonesia. Specializing in web development and professional photography.",
  keywords: "Dio Fajrie Fadlullah, Software Engineer, Photographer, Web Developer, Jakarta, Indonesia, Personal Portfolio, Professional Developer, Tech Professional",
  authors: [{ name: "Dio Fajrie Fadlullah" }],
  creator: "Dio Fajrie Fadlullah",
  publisher: "Dio Fajrie Fadlullah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://diofajrie.site'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diofajrie.site',
    title: 'Dio Fajrie Fadlullah | Software Engineer & Photographer in Jakarta',
    description: 'Dio Fajrie Fadlullah is a Software Engineer and Photographer based in Jakarta, Indonesia. Specializing in web development and professional photography.',
    siteName: 'Dio Fajrie Fadlullah',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dio Fajrie Fadlullah - Software Engineer & Photographer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dio Fajrie Fadlullah | Software Engineer & Photographer in Jakarta',
    description: 'Dio Fajrie Fadlullah is a Software Engineer and Photographer based in Jakarta, Indonesia. Specializing in web development and professional photography.',
    images: ['/profile.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'vNREoIpugc84f0Hi4zS6Q4m7rP8eUhsKwssfXI-j75Y',
  },
  alternates: {
    canonical: 'https://diofajrie.site',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
