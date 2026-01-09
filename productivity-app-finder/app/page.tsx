export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Stop Juggling 8 Different Apps
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find the perfect all-in-one productivity tool that actually works.
              Compare features, read honest reviews, and cure your app fatigue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/compare" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                Compare Top Apps
              </a>
              <a href="#problem" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The App Switching Nightmare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You're not alone. <strong>43% of workers</strong> waste time switching between too many apps,
              losing <strong>40% of their productivity</strong> in the process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">App Fatigue</h3>
              <p className="text-gray-600">
                Todoist for tasks, Notion for notes, Google Calendar for meetings,
                Habitica for habits... when does it end?
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Subscription Hell</h3>
              <p className="text-gray-600">
                $50-80/month across 5-8 different apps. You're paying more to be LESS productive.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disconnected Data</h3>
              <p className="text-gray-600">
                Your goals don't talk to your tasks. Your habits don't connect to your calendar.
                Everything lives in silos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What If One App Could Do It All?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We analyzed hundreds of productivity tools to find the ones that actually consolidate
              your workflow without the complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ What You Need</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Tasks, habits, goals & notes in ONE place</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Calendar integration with smart scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Fast, simple interface (not Notion-level complexity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>AI-powered prioritization & time blocking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Easy data import from existing apps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ What You Don't Need</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>8 hours of setup time (then abandon it in 30 days)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>67% of users feel stressed by too many features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Multiple subscriptions draining your wallet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Context switching killing your flow state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Data trapped in silos across different platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Top Picks for 2026
            </h2>
            <p className="text-lg text-gray-600">
              Based on real user feedback, feature sets, and value for money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Motion */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Best Overall
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Motion</h3>
                <p className="text-gray-600 mb-4">AI-powered calendar & task manager that auto-schedules your day</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">$34</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>✓ Automatic time blocking</li>
                  <li>✓ AI task prioritization</li>
                  <li>✓ Calendar integration</li>
                  <li>✓ Project management</li>
                </ul>
                <a href="/reviews/motion" className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 font-medium">
                  Read Full Review
                </a>
              </div>
            </div>

            {/* Sunsama */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunsama</h3>
              <p className="text-gray-600 mb-4">Daily planning ritual with task imports from all your apps</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Daily shutdown ritual</li>
                <li>✓ Import from 10+ apps</li>
                <li>✓ Time tracking</li>
                <li>✓ Beautiful interface</li>
              </ul>
              <a href="/reviews/sunsama" className="block w-full text-center bg-gray-100 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 font-medium">
                Read Full Review
              </a>
            </div>

            {/* Notion */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Notion</h3>
              <p className="text-gray-600 mb-4">Ultimate flexibility if you don't mind the complexity</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">$10</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Infinite customization</li>
                <li>✓ Databases & wikis</li>
                <li>✓ Team collaboration</li>
                <li>⚠ Steep learning curve</li>
              </ul>
              <a href="/reviews/notion" className="block w-full text-center bg-gray-100 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 font-medium">
                Read Full Review
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/compare" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600">
              See Full Comparison Table
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Consolidate Your Productivity Stack?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop paying for 8 apps when one can do the job. Compare features, pricing, and find your perfect fit.
          </p>
          <a href="/compare" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition">
            Compare All Apps Now
          </a>
        </div>
      </section>
    </main>
  )
}
