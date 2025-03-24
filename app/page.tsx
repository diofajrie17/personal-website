import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Camera,
  Briefcase,
  Cpu,
  Globe,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ChevronRight,
  Image as ImageIcon,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Modern layered background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-black opacity-70" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] animate-gradient" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-25" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      <Navigation />
      
      {/* Hero Section with glass morphism */}
      <section className="container mx-auto pt-24 pb-12 px-4 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white/30 dark:bg-black/30 backdrop-blur-[2px] rounded-3xl"></div>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-[3px] ring-purple-500/50 dark:ring-purple-400/50 ring-offset-4 ring-offset-background shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20">
        <Image
                src="/images/profile.jpg"
                alt="Dio Fajrie Fadlullah"
                width={384}
                height={384}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          priority
                quality={100}
              />
            </div>
            <Sparkles className="absolute -right-2 -top-2 h-8 w-8 text-yellow-400 animate-pulse" />
          </div>

          <div className="space-y-6 relative">
            <div className="relative">
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 pb-2">
                Dio Fajrie Fadlullah
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              <span className="inline-block animate-bounce mr-2">👨‍💻</span>
              Software Engineer & Photographer
              <span className="inline-block animate-bounce ml-2">📸</span>
              <br />
              <span className="text-base mt-4 block opacity-90">
                based in <span className="font-semibold text-foreground">Jakarta, Indonesia</span>. 
                Passionate about creating elegant solutions and capturing moments through the lens.
              </span>
            </p>
          </div>

          <div className="flex gap-4 pt-6">
            <Link href="#engineering">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                <span className="relative z-10">View Engineering Work</span>
                <ChevronRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Link href="#photography">
              <Button size="lg" variant="outline" className="group border-2 hover:border-purple-500/50 dark:hover:border-purple-400/50">
                View Photography
                <Camera className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section id="engineering" className="container mx-auto py-16 px-4">
        <div className="relative">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
              <Code2 className="relative h-10 w-10 text-blue-500" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Software Engineering
            </span>
          </h2>
        </div>
        
        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <div className="p-1 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Cpu className="h-6 w-6 text-purple-500" />
            </div>
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-t-blue-500 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 transition-colors group-hover:bg-blue-500/20">
                    <Layout className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2 group-hover:text-blue-500 transition-colors duration-300">⚛️ React & Next.js</li>
                  <li className="flex items-center gap-2 group-hover:text-blue-500 transition-colors duration-300">🎨 Vue.js</li>
                  <li className="flex items-center gap-2 group-hover:text-blue-500 transition-colors duration-300">📝 TypeScript</li>
                  <li className="flex items-center gap-2 group-hover:text-blue-500 transition-colors duration-300">🔧 JavaScript</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-t-green-500 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-green-100 dark:bg-green-900/30 transition-colors group-hover:bg-green-500/20">
                    <Server className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2 group-hover:text-green-500 transition-colors duration-300">💎 Ruby on Rails</li>
                  <li className="flex items-center gap-2 group-hover:text-green-500 transition-colors duration-300">🚀 Go</li>
                  <li className="flex items-center gap-2 group-hover:text-green-500 transition-colors duration-300">🐘 Laravel (PHP)</li>
                  <li className="flex items-center gap-2 group-hover:text-green-500 transition-colors duration-300">🐍 Python</li>
                  <li className="flex items-center gap-2 group-hover:text-green-500 transition-colors duration-300">☕️ Java & Kotlin</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-t-yellow-500 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 transition-colors group-hover:bg-yellow-500/20">
                    <Database className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                  </div>
                  Databases & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2 group-hover:text-yellow-500 transition-colors duration-300">🤖 RAG Systems</li>
                  <li className="flex items-center gap-2 group-hover:text-yellow-500 transition-colors duration-300">🧠 LangChain & LlamaIndex</li>
                  <li className="flex items-center gap-2 group-hover:text-yellow-500 transition-colors duration-300">🔍 Vector Databases</li>
                  <li className="flex items-center gap-2 group-hover:text-yellow-500 transition-colors duration-300">🐘 PostgreSQL</li>
                  <li className="flex items-center gap-2 group-hover:text-yellow-500 transition-colors duration-300">🐬 MySQL</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-t-red-500 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-red-100 dark:bg-red-900/30 transition-colors group-hover:bg-red-500/20">
                    <Globe className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                  DevOps & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2 group-hover:text-red-500 transition-colors duration-300">🐳 Docker</li>
                  <li className="flex items-center gap-2 group-hover:text-red-500 transition-colors duration-300">📦 Git & Version Control</li>
                  <li className="flex items-center gap-2 group-hover:text-red-500 transition-colors duration-300">🔄 CI/CD</li>
                  <li className="flex items-center gap-2 group-hover:text-red-500 transition-colors duration-300">☁️ Cloud Platforms</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-orange-500" />
            Work Experience
          </h3>
          <div className="space-y-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  Software Engineer
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">Current</span>
                </CardTitle>
                <CardDescription className="text-base flex items-center gap-2">
                  <span className="font-medium">Mekari</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span>Feb 2024 - Present</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">Hybrid</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-blue-500">🚀</span> Passionate about building scalable and efficient applications, specializing in backend development with Go and frontend development using Vue.js. Experienced with Ruby on Rails, contributing to full-stack projects that enhance user experience and system performance.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                      Key Responsibilities
                    </h4>
                    <ul className="grid gap-3 text-muted-foreground">
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-green-500 shrink-0 mt-1">✅</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Backend Development:</span> Develop and maintain high-performance backend services using Go, implementing robust APIs and ensuring system reliability
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-green-500 shrink-0 mt-1">✅</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Frontend Development:</span> Create dynamic and responsive user interfaces with Vue.js, focusing on user experience and modern design principles
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-green-500 shrink-0 mt-1">✅</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Full-Stack Integration:</span> Work with Ruby on Rails for comprehensive full-stack development, ensuring seamless integration between frontend and backend systems
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-green-500 shrink-0 mt-1">✅</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Performance Optimization:</span> Implement database optimizations and architect efficient system structures to enhance application performance
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-green-500 shrink-0 mt-1">✅</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Team Collaboration:</span> Work effectively with cross-functional teams to deliver high-quality software solutions and maintain code quality standards
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  Full Stack Engineer
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">Previous</span>
                </CardTitle>
                <CardDescription className="text-base flex items-center gap-2">
                  <span className="font-medium">Investree</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span>Jun 2022 - Feb 2024</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">1 yr 9 mos</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                      Key Achievements & Responsibilities
                    </h4>
                    <ul className="grid gap-3 text-muted-foreground">
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-purple-500 shrink-0 mt-1">⚡️</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Legacy System Maintenance:</span> Successfully maintained and enhanced legacy codebase using Laravel, implementing modern practices while ensuring system stability
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-purple-500 shrink-0 mt-1">⚡️</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Backend Development:</span> Developed and maintained robust backend services and APIs using Kotlin Spring Boot, focusing on scalability and performance
                        </span>
          </li>
                      <li className="flex items-start gap-3 group/item hover:text-foreground transition-colors">
                        <span className="text-purple-500 shrink-0 mt-1">⚡️</span>
                        <span className="group-hover/item:text-foreground">
                          <span className="font-medium text-foreground">Frontend Development:</span> Built and maintained modern frontend applications using Vue.js, implementing responsive designs and optimizing user experience
                        </span>
          </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <div className="p-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </div>
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 dark:bg-gray-900/50 backdrop-blur-sm border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 transition-colors group-hover:bg-indigo-500/20">
                    <svg 
                      className="h-5 w-5 text-indigo-500 group-hover:scale-110 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M15 5v2" />
                      <path d="M9 5v6" />
                      <path d="M9 17v2" />
                      <path d="M15 11v8" />
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                  GameVault
                  <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Web Platform</span>
                </CardTitle>
                <CardDescription className="text-base flex flex-wrap items-center gap-2">
                  <span className="font-medium text-indigo-500 dark:text-indigo-400">Game Top-up Platform</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">Laravel</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">JavaScript</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">MySQL</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive game top-up platform that enables users to purchase in-game currency and items for various popular games. Built with Laravel and JavaScript, featuring secure payment integration and real-time transaction processing.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-indigo-500"></span>
                      Key Features
                    </h4>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 shrink-0">⚡️</span>
                        <span>Secure payment gateway integration with multiple payment methods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 shrink-0">⚡️</span>
                        <span>Real-time order tracking and automated delivery system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 shrink-0">⚡️</span>
                        <span>User authentication and transaction history management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-500 shrink-0">⚡️</span>
                        <span>Admin dashboard for inventory and order management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>3 months development</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 dark:bg-gray-900/50 backdrop-blur-sm border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 transition-colors group-hover:bg-purple-500/20">
                    <svg 
                      className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3" />
                      <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3" />
                    </svg>
                  </div>
                  SmartRAG
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">AI Project</span>
                </CardTitle>
                <CardDescription className="text-base flex flex-wrap items-center gap-2">
                  <span className="font-medium text-purple-500 dark:text-purple-400">Retrieval-Augmented Generation System</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">Python</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">LangChain</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">Vector DB</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    A Retrieval-Augmented Generation (RAG) system that enhances Large Language Model responses with context from a custom knowledge base. Built with Python and modern AI tools, featuring semantic search and efficient document retrieval.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                      Key Features
                    </h4>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 shrink-0">⚡️</span>
                        <span>Document processing and chunking for optimal retrieval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 shrink-0">⚡️</span>
                        <span>Vector embeddings for semantic search capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 shrink-0">⚡️</span>
                        <span>Integration with modern LLM APIs for enhanced responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 shrink-0">⚡️</span>
                        <span>Efficient document retrieval and context injection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Personal Project</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photography" className="container mx-auto py-16 px-4">
        <div className="relative">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500 rounded-lg blur opacity-30"></div>
              <Camera className="relative h-10 w-10 text-purple-500" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Photography
            </span>
          </h2>
        </div>
        
        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <div className="p-1 rounded-lg bg-pink-100 dark:bg-pink-900/30">
              <ImageIcon className="h-6 w-6 text-pink-500" />
            </div>
            Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative aspect-square bg-muted rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">Photo Description</p>
              </div>
            </div>
            <div className="group relative aspect-square bg-muted rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">Photo Description</p>
              </div>
            </div>
            <div className="group relative aspect-square bg-muted rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">Photo Description</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <div className="p-1 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Camera className="h-6 w-6 text-purple-500" />
            </div>
            Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-t-4 border-t-purple-500 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 transition-colors group-hover:bg-purple-500/20">
                    <Camera className="h-5 w-5 text-purple-500 group-hover:rotate-12 transition-transform" />
                  </div>
                  Portrait Photography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-purple-500 transition-colors duration-300">Professional portrait sessions for individuals and groups</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16 px-4">
        <div className="relative">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-500 rounded-lg blur opacity-30"></div>
              <Mail className="relative h-10 w-10 text-pink-500" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              Get in Touch
            </span>
          </h2>
        </div>
        <Card className="group hover:shadow-xl transition-all duration-500 dark:bg-gray-900/50 backdrop-blur-sm border-none bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50">
          <CardContent className="pt-6">
            <div className="text-center space-y-8">
              <p className="text-lg text-muted-foreground">
                Interested in working together? Feel free to reach out through any of these channels:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:diofajriefadlullah17@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-purple-500/50 dark:hover:border-purple-400/50">
                    <span className="relative z-10 flex items-center gap-2">
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Email
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/diofajrie/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-blue-500/50 dark:hover:border-blue-400/50">
                    <span className="relative z-10 flex items-center gap-2">
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                <a href="https://github.com/diofajrie17" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-gray-500/50 dark:hover:border-gray-400/50">
                    <span className="relative z-10 flex items-center gap-2">
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      GitHub
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/dio.fajrie/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-pink-500/50 dark:hover:border-pink-400/50">
                      <span className="relative z-10 flex items-center gap-2">
                        <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        Personal
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/masdo.y/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="group relative overflow-hidden border-2 hover:border-pink-500/50 dark:hover:border-pink-400/50">
                      <span className="relative z-10 flex items-center gap-2">
                        <Camera className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        Photography
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </a>
                </div>
              </div>
    </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
