import { Section } from "../../common/section-wrapper"
import { Heading } from "../../common/heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { ArrowLeft, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Heading className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">Case Studies</h1>
            <p className="text-xl text-muted-foreground mt-4">
              Real results from real e-commerce brands who transformed their operations with AI automation.
            </p>
          </Heading>

          <div className="space-y-12">
            {/* PetJoy Case Study */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-emerald-500">PetJoy</div>
                  <Badge variant="secondary">Pet Supplies</Badge>
                </div>
                <CardTitle className="text-3xl mb-4">Saved 27 hrs/week, +38% revenue</CardTitle>
                <CardDescription className="text-lg">
                  How PetJoy automated their customer support and order processing to achieve massive growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">27 hrs</div>
                    <div className="text-sm text-muted-foreground">Saved per week</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">38%</div>
                    <div className="text-sm text-muted-foreground">Revenue increase</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">60%</div>
                    <div className="text-sm text-muted-foreground">Cost reduction</div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    PetJoy was drowning in customer support tickets, spending 40+ hours per week manually responding to
                    routine inquiries about orders, shipping, and product information. Their small team was overwhelmed,
                    leading to delayed responses and frustrated customers.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                  <p className="text-muted-foreground mb-4">
                    We implemented a comprehensive AI automation system including intelligent chatbots for instant
                    customer support, automated order processing workflows, and smart inventory management. The system
                    handles 80% of customer inquiries automatically while escalating complex issues to human agents.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">The Results</h3>
                  <p className="text-muted-foreground">
                    Within 60 days, PetJoy transformed from a reactive support team to a proactive growth machine.
                    Customer satisfaction scores increased by 45%, response times dropped to under 2 minutes, and the
                    team could focus on strategic initiatives that drove significant revenue growth.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* GlowSkin Case Study */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-emerald-500">GlowSkin</div>
                  <Badge variant="secondary">Beauty & Skincare</Badge>
                </div>
                <CardTitle className="text-3xl mb-4">Doubled AOV with AI upsells</CardTitle>
                <CardDescription className="text-lg">
                  How GlowSkin used intelligent product recommendations to dramatically increase their average order
                  value.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">2x</div>
                    <div className="text-sm text-muted-foreground">Average order value</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">150%</div>
                    <div className="text-sm text-muted-foreground">Revenue per customer</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">15 hrs</div>
                    <div className="text-sm text-muted-foreground">Saved per week</div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    GlowSkin had great products but struggled with low average order values. Customers would buy single
                    items without discovering complementary products, and the manual upselling process was inconsistent
                    and time-consuming.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                  <p className="text-muted-foreground mb-4">
                    We deployed AI-powered product recommendation engines, automated email sequences for cross-selling,
                    and intelligent chatbots that suggest complementary products based on skin type and concerns. The
                    system learns from customer behavior to continuously improve recommendations.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">The Results</h3>
                  <p className="text-muted-foreground">
                    GlowSkin's average order value doubled from $45 to $90 within 90 days. Customer lifetime value
                    increased by 150%, and the automated system now generates 65% of their upsell revenue without any
                    manual intervention.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
