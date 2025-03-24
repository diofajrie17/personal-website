import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/providers/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dio Fajrie Fadlullah - Software Engineer & Photographer",
  description: "Personal website of Dio Fajrie Fadlullah, a Software Engineer and Photographer based in Jakarta, Indonesia.",
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
