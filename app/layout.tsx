import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/providers/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dio Fajrie Fadlullah - Software Engineer & Photographer",
  description: "Personal website of Dio Fajrie Fadlullah, a Software Engineer and Photographer based in Jakarta, Indonesia.",
  keywords: "Software Engineer, Photographer, Web Development, Jakarta, Indonesia",
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
    title: 'Dio Fajrie Fadlullah - Software Engineer & Photographer',
    description: 'Personal website of Dio Fajrie Fadlullah, a Software Engineer and Photographer based in Jakarta, Indonesia.',
    siteName: 'Dio Fajrie Fadlullah',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dio Fajrie Fadlullah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dio Fajrie Fadlullah - Software Engineer & Photographer',
    description: 'Personal website of Dio Fajrie Fadlullah, a Software Engineer and Photographer based in Jakarta, Indonesia.',
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
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
