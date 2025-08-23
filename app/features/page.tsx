import { Section } from "../../common/section-wrapper"
import { Heading } from "../../common/heading"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Users, Zap, Target, Calendar, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 dark:from-emerald-950/20 dark:via-background dark:to-emerald-950/10" />

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-6">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Our Features
            </Badge>

            <Heading>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-800 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-emerald-200">
                Everything you need to{" "}
                <span className="text-emerald-600 dark:text-emerald-400">grow your business</span>
              </h1>
            </Heading>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to help your business thrive in today's competitive market.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/#contact" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Detailed Features */}
      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
                Business Consulting
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Strategic guidance that drives results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert consultants work closely with you to understand your unique challenges and develop customized
                strategies that align with your business goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Analysis</h3>
                    <p className="text-muted-foreground">
                      Deep dive into your market position and competitive landscape
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Strategic Planning</h3>
                    <p className="text-muted-foreground">Develop actionable roadmaps for sustainable growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance Tracking</h3>
                    <p className="text-muted-foreground">Monitor progress with key metrics and regular reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8 shadow-lg">
                <Users className="w-16 h-16 text-emerald-600 mb-4" />
                <div className="text-2xl font-bold text-emerald-800 mb-2">200+ Businesses</div>
                <div className="text-emerald-700">Successfully guided to growth</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="lg:order-2">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
                Process Optimization
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Streamline operations for maximum efficiency</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Identify bottlenecks, eliminate waste, and optimize your workflows to increase productivity and reduce
                operational costs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Workflow Analysis</h3>
                    <p className="text-muted-foreground">Comprehensive review of your current processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Automation Solutions</h3>
                    <p className="text-muted-foreground">Implement tools and systems to reduce manual work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Continuous Improvement</h3>
                    <p className="text-muted-foreground">Ongoing optimization to maintain peak performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8 shadow-lg">
                <Zap className="w-16 h-16 text-emerald-600 mb-4" />
                <div className="text-2xl font-bold text-emerald-800 mb-2">40% Average</div>
                <div className="text-emerald-700">Efficiency improvement</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 mb-4">
                Growth Strategy
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Scale with confidence and clarity</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Develop comprehensive growth strategies that align with your vision and market opportunities, ensuring
                sustainable expansion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Market Expansion</h3>
                    <p className="text-muted-foreground">Identify and enter new markets strategically</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Revenue Optimization</h3>
                    <p className="text-muted-foreground">Maximize revenue through pricing and product strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Risk Management</h3>
                    <p className="text-muted-foreground">Mitigate risks while pursuing growth opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8 shadow-lg">
                <Target className="w-16 h-16 text-emerald-600 mb-4" />
                <div className="text-2xl font-bold text-emerald-800 mb-2">95% Success</div>
                <div className="text-emerald-700">Client satisfaction rate</div>
              </div>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Ready to transform your business?</h2>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of businesses that have already experienced the Femur difference.
              </p>
            </Heading>

            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/#contact" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
