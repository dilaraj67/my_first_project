import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Productivity App Finder - Find Your Perfect All-in-One Productivity Tool',
  description: 'Stop juggling multiple apps. Discover the best all-in-one productivity tools, compare features, and cure your app fatigue. Honest reviews of Notion, Motion, Todoist & more.',
  keywords: 'productivity apps, all-in-one productivity, app consolidation, Notion alternative, best productivity tools, habit tracker, task management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-primary">📱 App Finder</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/" className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="/compare" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Compare Apps
                </a>
                <a href="/reviews" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Reviews
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 Productivity App Finder. Affiliate links may earn us a commission at no cost to you.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
