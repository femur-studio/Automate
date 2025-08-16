import { Section } from "../common/section-wrapper"
import { Heading } from "../common/heading"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Clock, Users, Zap, Target, Calendar } from "lucide-react"
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
              Trusted by 200+ Businesses
            </Badge>

            <Heading>
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-emerald-200">
                Femur helps businesses grow with{" "}
                <span className="text-emerald-600 dark:text-emerald-400">smart solutions</span> and{" "}
                <span className="text-emerald-600 dark:text-emerald-400">expert guidance</span>—without the complexity.
              </h1>
            </Heading>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Free 30-min consultation shows you exactly how.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#contact" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-emerald-600">FM</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600">UR</span>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-semibold text-purple-600">ST</span>
                </div>
              </div>
              <span>Join 200+ businesses already growing</span>
            </div>
          </div>

          {/* Social proof metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emerald-600 dark:text-emerald-400">200+</div>
              <div className="text-sm text-muted-foreground">Businesses Served</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Logo Bar */}
      <Section className="py-16 border-y bg-gray-50/50 dark:bg-gray-900/20">
        <div className="text-center space-y-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
            Trusted by leading businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <img
              src="/abstract-business-logo.png"
              alt="Client 1"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/abstract-business-logo-2.png"
              alt="Client 2"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/abstract-geometric-logo-3.png"
              alt="Client 3"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
            <img
              src="/abstract-geometric-logo-4.png"
              alt="Client 4"
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
          </div>

          {/* Additional trust indicators */}
          <div className="flex justify-center items-center gap-8 pt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>200+ Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>$10M+ Revenue Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>99% Success Rate</span>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Grow Your Business with Confidence</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop struggling with complex business challenges. Our expert solutions help you focus on what matters
                most - growing your business.
              </p>
            </Heading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Business Consulting</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Strategic guidance that works</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Expert business consulting that helps you make informed decisions, optimize operations, and achieve
                  sustainable growth.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Average Timeline</span>
                    <span className="font-semibold">2-4 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Process Optimization</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Streamline your operations</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Identify bottlenecks and optimize your business processes to increase efficiency and reduce costs.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency Gain</span>
                    <span className="font-semibold">30-50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Growth Strategy</CardTitle>
                <div className="text-sm text-emerald-600 font-semibold mb-4">Scale with confidence</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Develop comprehensive growth strategies that align with your goals and market opportunities.
                </CardDescription>
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional feature highlights */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20">
              <div className="text-2xl font-bold text-emerald-600 mb-1">30 Day</div>
              <div className="text-sm text-muted-foreground">Money Back</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <Badge variant="outline" className="border-emerald-300 text-emerald-300 bg-emerald-500/10 mb-4">
              Get Started
            </Badge>

            <Heading>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our team and discover how Femur can help you achieve your business goals.
              </p>
            </Heading>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="px-6 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-6 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    required
                  />
                </div>
                <textarea
                  placeholder="Tell us about your business goals..."
                  rows={4}
                  className="w-full px-6 py-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                  required
                />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                </Button>
                <div className="text-xs text-emerald-200/80 text-center">
                  ✓ Free consultation ✓ No spam, ever ✓ Response within 24 hours
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
