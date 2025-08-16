import { Section } from "../common/section-wrapper"
import { Heading } from "../common/heading"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Users, Zap, Target, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 dark:from-emerald-950/20 dark:via-background dark:to-emerald-950/10" />

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Trusted by 200+ E-commerce Brands
            </Badge>

            <Heading>
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-emerald-200">
                E-commerce brands plug our AI to cut support tickets by{" "}
                <span className="text-emerald-600 dark:text-emerald-400">60%</span> and reclaim{" "}
                <span className="text-emerald-600 dark:text-emerald-400">10+ hours</span> a week—without hiring.
              </h1>
            </Heading>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Free 30-min Automation Audit shows you exactly how.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://calendly.com/autoscale-ai/audit" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Audit
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600">PJ</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">GS</span>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-purple-600">FF</span>
                </div>
              </div>
              <span>Join 200+ brands already saving time</span>
            </div>
          </div>

          {/* Social proof metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">60%</div>
              <div className="text-sm text-muted-foreground">Fewer Support Tickets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">10+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">200+</div>
              <div className="text-sm text-muted-foreground">Brands Automated</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Logo Bar */}
      <Section className="py-16 border-y bg-gray-50/50 dark:bg-gray-900/20">
        <div className="text-center space-y-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
            Trusted by leading e-commerce brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <img
              src="/logos/petjoy-logo.png"
              alt="PetJoy"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/logos/glowskin-logo.png"
              alt="GlowSkin"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/logos/flexfit-logo.png"
              alt="FlexFit"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/logos/novastore-logo.png"
              alt="NovaStore"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
          </div>

          {/* Additional trust indicators */}
          <div className="flex justify-center items-center gap-8 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>200+ Brands</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>$50M+ Revenue Automated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
              Our Solutions
            </Badge>
            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Automate Your Way to Growth</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop drowning in repetitive tasks. Our AI-powered automation suite handles the heavy lifting so you can
                focus on scaling your business.
              </p>
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">AI Chatbots</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Slash response time under 2 min</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Intelligent customer support automation that handles 80% of inquiries instantly, escalating complex
                  issues to your team only when needed.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Average Setup</span>
                    <span className="font-semibold">2-3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Workflow Automation</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Eliminate 80% of manual tasks</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Seamless integration with Zapier and Make to automate order processing, inventory management, and
                  customer communications.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Integrations</span>
                    <span className="font-semibold">500+ Apps</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">24/7 Lead Qualification</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Convert 40% more leads</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Round-the-clock intelligent lead scoring and qualification that never sleeps, ensuring no opportunity
                  slips through the cracks.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold">&lt; 30 seconds</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional feature highlights */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-sm text-muted-foreground">App Integrations</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">30 Day</div>
              <div className="text-sm text-muted-foreground">Money Back</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Study Teasers */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
              Success Stories
            </Badge>
            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Real Results from Real Brands</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how leading e-commerce brands transformed their operations and achieved remarkable growth with our
                AI automation solutions.
              </p>
            </Heading>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-900 dark:to-emerald-950/30">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logos/petjoy-logo.png" alt="PetJoy" className="h-8 w-auto" />
                  <Badge variant="secondary" className="text-xs">
                    Pet Supplies
                  </Badge>
                </div>
                <CardTitle className="text-3xl mb-4 bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-emerald-300">
                  Saved 27 hrs/week, +38% revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Automated customer support and order processing led to massive time savings and revenue growth. PetJoy
                  transformed from reactive support to proactive growth.
                </CardDescription>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">27hrs</div>
                    <div className="text-xs text-muted-foreground">Saved Weekly</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">38%</div>
                    <div className="text-xs text-muted-foreground">Revenue ↑</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">60%</div>
                    <div className="text-xs text-muted-foreground">Cost ↓</div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="text-emerald-500 hover:text-emerald-600 font-medium inline-flex items-center gap-2 group"
                >
                  Read full story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-900 dark:to-emerald-950/30">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logos/glowskin-logo.png" alt="GlowSkin" className="h-8 w-auto" />
                  <Badge variant="secondary" className="text-xs">
                    Beauty & Skincare
                  </Badge>
                </div>
                <CardTitle className="text-3xl mb-4 bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent dark:from-gray-100 dark:to-emerald-300">
                  Doubled AOV with AI upsells
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Smart product recommendations and automated upselling doubled their average order value while
                  improving customer satisfaction scores.
                </CardDescription>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">2x</div>
                    <div className="text-xs text-muted-foreground">AOV Growth</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">150%</div>
                    <div className="text-xs text-muted-foreground">LTV ↑</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg dark:bg-emerald-950/30">
                    <div className="text-lg font-bold text-emerald-600">65%</div>
                    <div className="text-xs text-muted-foreground">Auto Upsells</div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
                  className="text-emerald-500 hover:text-emerald-600 font-medium inline-flex items-center gap-2 group"
                >
                  Read full story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="py-24 bg-gradient-to-br from-emerald-50/30 via-white to-emerald-50/50 dark:from-emerald-950/10 dark:via-background dark:to-emerald-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
              Pricing Plans
            </Badge>
            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Choose Your Growth Path</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start with a free audit to see exactly how automation can transform your business. No commitments, just
                insights.
              </p>
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Starter Audit</CardTitle>
                <div className="text-5xl font-bold text-emerald-500 mb-2">Free</div>
                <CardDescription className="text-base">30-minute consultation</CardDescription>
                <div className="text-sm text-emerald-600 font-medium mt-2">Perfect for getting started</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Comprehensive automation opportunity assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom 90-day implementation roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detailed ROI projections and cost savings analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority workflow recommendations</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-muted-foreground mb-4">✓ No credit card required</div>
                  <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 py-3">
                    <Link href="https://calendly.com/autoscale-ai/audit" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Audit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center border-2 border-emerald-500 relative hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-900 dark:to-emerald-950/30 scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Growth Automation</CardTitle>
                <div className="text-5xl font-bold text-emerald-500 mb-1">
                  $2,500<span className="text-lg text-muted-foreground font-normal">/mo</span>
                </div>
                <CardDescription className="text-base">Complete automation setup & management</CardDescription>
                <div className="text-sm text-emerald-600 font-medium mt-2">Most businesses see 300%+ ROI</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI chatbot implementation & training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete workflow automation (Zapier/Make)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 system monitoring & support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monthly performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lead qualification & nurturing automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Integration with 500+ apps</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-emerald-200">
                  <div className="text-xs text-emerald-600 mb-4">✓ 30-day money-back guarantee</div>
                  <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 py-3">
                    <Link href="https://calendly.com/autoscale-ai/audit" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Audit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">DFY Enterprise</CardTitle>
                <div className="text-5xl font-bold text-emerald-500 mb-2">Custom</div>
                <CardDescription className="text-base">White-glove done-for-you service</CardDescription>
                <div className="text-sm text-purple-600 font-medium mt-2">For high-volume businesses</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated automation team (3-5 specialists)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom integrations & API development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority 24/7 support with 1-hour response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quarterly strategy & optimization reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced analytics & reporting dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-store & franchise automation</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-purple-200">
                  <div className="text-xs text-purple-600 mb-4">✓ Custom SLA & dedicated success manager</div>
                  <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 py-3">
                    <Link href="https://calendly.com/autoscale-ai/audit" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Audit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                <div className="text-2xl font-bold text-emerald-600 mb-2">30-Day</div>
                <div className="text-sm text-muted-foreground">Money-Back Guarantee</div>
              </div>
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                <div className="text-2xl font-bold text-emerald-600 mb-2">2-3 Days</div>
                <div className="text-sm text-muted-foreground">Average Setup Time</div>
              </div>
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
                <div className="text-2xl font-bold text-emerald-600 mb-2">300%+</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              All plans include our 30-day money-back guarantee. If you don't see measurable results within the first
              month, we'll refund your investment completely.
            </p>
          </div>
        </div>
      </Section>

      {/* Lead Magnet */}
      <Section className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <Badge variant="outline" className="border-emerald-300 text-emerald-300 bg-emerald-500/10 mb-4">
              Free Resource
            </Badge>

            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Grab the 7-Step E-commerce Automation Checklist
              </h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Get our proven framework that's helped 200+ brands automate their way to 6-figure growth. Download it
                free and start implementing today.
              </p>
            </Heading>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left space-y-3">
                  <h3 className="font-semibold text-emerald-300 mb-4">What's Inside:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Customer support automation blueprint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Lead qualification workflow templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>ROI calculation spreadsheet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Implementation timeline & milestones</span>
                    </div>
                  </div>
                </div>
                <div className="text-left space-y-3">
                  <h3 className="font-semibold text-emerald-300 mb-4">Bonus Materials:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Zapier automation recipes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Chatbot conversation scripts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Cost savings calculator</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Weekly email automation course</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    className="flex-1 px-6 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    required
                  />
                  <Button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Download Free Checklist
                  </Button>
                </div>
                <div className="text-xs text-emerald-200/80 text-center">
                  ✓ No spam, ever. ✓ Unsubscribe anytime. ✓ 200+ brands trust us with their email.
                </div>
              </form>
            </div>

            {/* Social proof for lead magnet */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-80">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Downloaded 5,000+ times</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>4.9/5 average rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Updated monthly</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
