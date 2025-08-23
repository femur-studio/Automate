import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Femur",
  description: "Latest insights and updates from Femur",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Stay updated with the latest insights, tips, and news from Femur.
          </p>

          <div className="grid gap-8 md:gap-12">
            {/* Blog post preview cards */}
            <article className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Welcome to Femur Blog</h2>
              <p className="text-muted-foreground mb-4">
                We're excited to share insights about business growth, optimization strategies, and industry trends that
                can help your business thrive.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Coming Soon</span>
              </div>
            </article>

            <article className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-foreground mb-3">5 Strategies for Business Growth</h2>
              <p className="text-muted-foreground mb-4">
                Discover proven methods to scale your business effectively and sustainably in today's competitive
                market.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Coming Soon</span>
              </div>
            </article>

            <article className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Process Optimization Best Practices</h2>
              <p className="text-muted-foreground mb-4">
                Learn how to streamline your operations and improve efficiency across all aspects of your business.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Coming Soon</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
