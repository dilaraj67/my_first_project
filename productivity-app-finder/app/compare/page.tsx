export const metadata = {
  title: 'Compare Best All-in-One Productivity Apps 2026 | Feature Comparison',
  description: 'Side-by-side comparison of Motion, Sunsama, Notion, Todoist, and more. Compare features, pricing, and find the perfect productivity app for you.',
}

const apps = [
  {
    name: 'Motion',
    price: '$34/mo',
    rating: '4.8/5',
    bestFor: 'Busy professionals who need AI scheduling',
    affiliateLink: '#motion-affiliate', // Replace with actual affiliate link
    features: {
      tasks: '✓ Advanced',
      habits: '○ Limited',
      notes: '○ Basic',
      calendar: '✓ AI-powered',
      timeBlocking: '✓ Automatic',
      aiScheduling: '✓ Yes',
      projectManagement: '✓ Yes',
      mobileApp: '✓ Excellent',
      integrations: '○ Limited',
      offlineMode: '○ No',
      customViews: '○ Limited',
      priceValue: '$$$$'
    },
    pros: [
      'Best-in-class AI scheduling',
      'Automatically reschedules when things change',
      'Saves 13+ hours per week according to users',
      'Beautiful interface'
    ],
    cons: [
      'Expensive at $34/month',
      'Limited integrations',
      'Habit tracking is basic',
      'Learning curve for AI features'
    ]
  },
  {
    name: 'Sunsama',
    price: '$20/mo',
    rating: '4.6/5',
    bestFor: 'Mindful planners who want daily rituals',
    affiliateLink: '#sunsama-affiliate',
    features: {
      tasks: '✓ Excellent',
      habits: '✓ Good',
      notes: '○ Basic',
      calendar: '✓ Integrated',
      timeBlocking: '✓ Manual',
      aiScheduling: '✗ No',
      projectManagement: '○ Basic',
      mobileApp: '✓ Good',
      integrations: '✓ Excellent (10+ apps)',
      offlineMode: '○ Limited',
      customViews: '○ Limited',
      priceValue: '$$$'
    },
    pros: [
      'Beautiful daily planning ritual',
      'Import tasks from Trello, Asana, Jira, etc.',
      'Time tracking built-in',
      'Encourages work-life balance',
      'Guided shutdown routine'
    ],
    cons: [
      'No AI automation',
      'Requires daily discipline',
      'Limited project management',
      'Can feel repetitive'
    ]
  },
  {
    name: 'Notion',
    price: '$10/mo',
    rating: '4.5/5',
    bestFor: 'Power users who want infinite customization',
    affiliateLink: '#notion-affiliate',
    features: {
      tasks: '✓ Customizable',
      habits: '✓ Via templates',
      notes: '✓ Excellent',
      calendar: '✓ Database view',
      timeBlocking: '✗ Manual only',
      aiScheduling: '✗ No',
      projectManagement: '✓ Excellent',
      mobileApp: '○ Slow',
      integrations: '✓ Good',
      offlineMode: '○ Limited',
      customViews: '✓ Infinite',
      priceValue: '$$'
    },
    pros: [
      'Ultimate flexibility',
      'Can build ANY workflow',
      'Great for teams',
      'Strong community & templates',
      'AI writing assistant'
    ],
    cons: [
      'Steep learning curve',
      'Setup takes 8+ hours',
      'Mobile app is slow',
      'Easy to over-engineer',
      'No built-in time blocking'
    ]
  },
  {
    name: 'Todoist',
    price: '$5/mo',
    rating: '4.7/5',
    bestFor: 'Minimalists who just need a great task list',
    affiliateLink: '#todoist-affiliate',
    features: {
      tasks: '✓ Excellent',
      habits: '○ Via recurring tasks',
      notes: '✗ No',
      calendar: '○ View only',
      timeBlocking: '✗ No',
      aiScheduling: '✗ No',
      projectManagement: '○ Basic',
      mobileApp: '✓ Excellent',
      integrations: '✓ Good',
      offlineMode: '✓ Yes',
      customViews: '✓ Filters',
      priceValue: '$'
    },
    pros: [
      'Lightning fast',
      'Best mobile experience',
      'Natural language input',
      'Affordable',
      'Works offline'
    ],
    cons: [
      'No calendar integration',
      'No time blocking',
      'Limited for complex projects',
      'No notes or docs',
      'Habit tracking is hacky'
    ]
  },
  {
    name: 'Akiflow',
    price: '$25/mo',
    rating: '4.4/5',
    bestFor: 'People who live in their calendar',
    affiliateLink: '#akiflow-affiliate',
    features: {
      tasks: '✓ Good',
      habits: '✗ No',
      notes: '○ Basic',
      calendar: '✓ Excellent',
      timeBlocking: '✓ Manual',
      aiScheduling: '○ Limited',
      projectManagement: '○ Basic',
      mobileApp: '✓ Good',
      integrations: '✓ Excellent',
      offlineMode: '✗ No',
      customViews: '○ Limited',
      priceValue: '$$$'
    },
    pros: [
      'Unified inbox for all tasks',
      'Keyboard shortcuts everywhere',
      'Imports from 20+ tools',
      'Great for power users'
    ],
    cons: [
      'No habit tracking',
      'Expensive',
      'Requires keyboard proficiency',
      'No AI features'
    ]
  },
  {
    name: 'TickTick',
    price: '$3/mo',
    rating: '4.6/5',
    bestFor: 'Budget-conscious users wanting features',
    affiliateLink: '#ticktick-affiliate',
    features: {
      tasks: '✓ Excellent',
      habits: '✓ Built-in',
      notes: '○ Basic',
      calendar: '✓ Built-in',
      timeBlocking: '○ Via calendar',
      aiScheduling: '✗ No',
      projectManagement: '✓ Good',
      mobileApp: '✓ Excellent',
      integrations: '○ Limited',
      offlineMode: '✓ Yes',
      customViews: '✓ Multiple',
      priceValue: '$'
    },
    pros: [
      'Incredibly affordable',
      'Built-in habit tracker',
      'Pomodoro timer included',
      'Calendar view',
      'Great value for money'
    ],
    cons: [
      'Interface feels dated',
      'No AI features',
      'Limited integrations',
      'Not great for teams'
    ]
  }
]

export default function ComparePage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compare All-in-One Productivity Apps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side-by-side comparison of the best productivity tools. Find the perfect app for your needs.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  App
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Best For
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  AI Scheduling
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Habits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {apps.map((app, index) => (
                <tr key={index} className={index === 0 ? 'bg-blue-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    {app.name}
                    {index === 0 && (
                      <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                        Best Overall
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{app.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{app.bestFor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{app.features.aiScheduling}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{app.features.habits}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-yellow-600 font-semibold">
                    {app.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={app.affiliateLink}
                      className="text-primary hover:text-blue-700 font-medium"
                      target="_blank"
                      rel="noopener"
                    >
                      Try Free →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Comparison Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Breakdown</h2>
          <div className="grid gap-8">
            {apps.map((app, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border-2 p-8 ${
                  index === 0 ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h3>
                    <p className="text-gray-600 mb-2">{app.bestFor}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">{app.price}</span>
                      <span className="text-yellow-600 font-semibold">★ {app.rating}</span>
                    </div>
                  </div>
                  <a
                    href={app.affiliateLink}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-600 font-medium whitespace-nowrap"
                    target="_blank"
                    rel="noopener"
                  >
                    Try Free Trial
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ Pros</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {app.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">⚠️ Cons</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {app.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Feature Breakdown</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Tasks:</span>{' '}
                      <span className="font-medium">{app.features.tasks}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Habits:</span>{' '}
                      <span className="font-medium">{app.features.habits}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Notes:</span>{' '}
                      <span className="font-medium">{app.features.notes}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Calendar:</span>{' '}
                      <span className="font-medium">{app.features.calendar}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Time Blocking:</span>{' '}
                      <span className="font-medium">{app.features.timeBlocking}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">AI:</span>{' '}
                      <span className="font-medium">{app.features.aiScheduling}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Mobile:</span>{' '}
                      <span className="font-medium">{app.features.mobileApp}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Integrations:</span>{' '}
                      <span className="font-medium">{app.features.integrations}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Guide */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which App Should You Choose?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose Motion if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You have meetings constantly changing</li>
                <li>• You want AI to manage your schedule</li>
                <li>• You value time savings over cost</li>
                <li>• You're a busy professional/founder</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose Sunsama if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You want intentional daily planning</li>
                <li>• You use multiple task tools</li>
                <li>• Work-life balance is important</li>
                <li>• You like guided rituals</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose Notion if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You need ultimate customization</li>
                <li>• You're building a team system</li>
                <li>• You enjoy tinkering & templates</li>
                <li>• Speed isn't your priority</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose Todoist if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You just need a killer task list</li>
                <li>• You want fast & simple</li>
                <li>• Budget is important ($5/mo)</li>
                <li>• Mobile is your primary device</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose TickTick if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You want habits + tasks together</li>
                <li>• Budget matters ($3/mo best value)</li>
                <li>• You need Pomodoro timer</li>
                <li>• You don't need AI features</li>
              </ul>
            </div>
            <div className="bg-white rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Choose Akiflow if:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• You live in your calendar</li>
                <li>• You love keyboard shortcuts</li>
                <li>• You need to consolidate 10+ tools</li>
                <li>• You're a power user</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Still Not Sure? Start with a Free Trial
          </h2>
          <p className="text-blue-100 mb-6">
            All of these apps offer free trials. Try 2-3 and see which one feels right for your workflow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#motion-affiliate"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 font-medium"
            >
              Try Motion Free
            </a>
            <a
              href="#sunsama-affiliate"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 font-medium"
            >
              Try Sunsama Free
            </a>
            <a
              href="#notion-affiliate"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 font-medium"
            >
              Try Notion Free
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
