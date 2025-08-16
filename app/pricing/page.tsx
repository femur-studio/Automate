import { Section } from "../../common/section-wrapper"
import { Heading } from "../../common/heading"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Check, Calendar, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 dark:from-emerald-950/20 dark:via-background dark:to-emerald-950/10" />

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>

            <Heading>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-emerald-200">
                Simple pricing for <span className="text-emerald-600 dark:text-emerald-400">every business</span>
              </h1>
            </Heading>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include our commitment to your success.
            </p>
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="relative p-8 hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-base">Perfect for small businesses getting started</CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-emerald-600">$2,500</div>
                  <div className="text-sm text-muted-foreground">one-time project</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Business assessment & strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Process optimization review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Growth roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>30-day email support</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/#contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <div className="text-xs text-center text-muted-foreground">
                  Perfect for businesses under $500K revenue
                </div>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="relative p-8 hover:shadow-lg transition-shadow duration-300 border-2 border-emerald-500 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Growth</CardTitle>
                <CardDescription className="text-base">Comprehensive solution for growing businesses</CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-emerald-600">$5,000</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Everything in Starter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Ongoing strategic consulting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Monthly performance reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Quarterly strategy updates</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/#contact">
                    Start Growing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <div className="text-xs text-center text-muted-foreground">
                  Ideal for businesses $500K - $5M revenue
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative p-8 hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-base">Custom solutions for large organizations</CardDescription>
                <div className="mt-6">
                  <div className="text-4xl font-bold text-emerald-600">Custom</div>
                  <div className="text-sm text-muted-foreground">tailored pricing</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Everything in Growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>24/7 priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>SLA guarantees</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  <Link href="/#contact">
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <div className="text-xs text-center text-muted-foreground">For businesses over $5M revenue</div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">All plans include:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 bg-gray-50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our pricing and services.</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What's included in the free consultation?</h3>
              <p className="text-muted-foreground">
                Our free 30-minute consultation includes a business assessment, identification of key growth
                opportunities, and a preliminary roadmap for your success.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                You can upgrade or downgrade your plan at any time. We'll work with you to ensure a smooth transition
                that meets your evolving needs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground">
                Yes, our Enterprise plan is fully customizable. We work with you to create a solution that perfectly
                fits your unique business requirements and goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What's your success guarantee?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee. If you're not completely satisfied with our service, we'll
                refund your investment, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Ready to get started?</h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Book your free consultation today and discover how Femur can help your business grow.
              </p>
            </Heading>

            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/#contact" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
