import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog - Femur",
  description: "Latest updates and improvements to Femur services",
}

export default function ChangelogPage() {
  const updates = [
    {
      version: "2.1.0",
      date: "2024-01-15",
      title: "Enhanced Business Analytics",
      changes: [
        "Improved dashboard performance by 40%",
        "Added new KPI tracking features",
        "Enhanced data visualization tools",
        "Better mobile responsiveness",
      ],
    },
    {
      version: "2.0.0",
      date: "2024-01-01",
      title: "Major Platform Update",
      changes: [
        "Complete UI/UX redesign",
        "New automation workflows",
        "Advanced reporting capabilities",
        "Improved security features",
      ],
    },
    {
      version: "1.5.0",
      date: "2023-12-15",
      title: "Process Optimization Tools",
      changes: [
        "New process mapping features",
        "Automated workflow suggestions",
        "Performance benchmarking",
        "Integration with popular business tools",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Changelog</h1>
            <p className="text-xl text-muted-foreground">Stay updated with the latest improvements and features</p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{update.title}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        v{update.version}
                      </span>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {update.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Have suggestions for improvements?{" "}
              <a href="mailto:hello@femur.com" className="text-primary hover:underline">
                Let us know
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
