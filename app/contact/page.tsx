import { Section } from "../../common/section-wrapper"
import { Heading } from "../../common/heading"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
            Get In Touch
          </Badge>

          <Heading>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your <span className="text-emerald-600">Business Goals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take your business to the next level? Schedule a free consultation or reach out to us directly.
            </p>
          </Heading>
        </div>
      </Section>

      {/* Contact Options */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Schedule Meeting */}
            <Card className="p-8 border-0 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Schedule a Meeting</CardTitle>
                <CardDescription className="text-base">
                  Book a free 30-minute consultation to discuss your business needs
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>30 minutes • Free consultation</span>
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">
                    ✓ No commitment required ✓ Instant booking ✓ Video or phone call
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg font-semibold"
                >
                  <a href="https://cal.com/femur/consultation" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Free Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Prefer to write? Send us your details and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Tell us about your business goals and challenges..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                    required
                  />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 text-lg font-semibold">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Reach Us</h2>
            <p className="text-muted-foreground">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">For detailed inquiries and project discussions</p>
              <a href="mailto:hello@femur.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                hello@femur.com
              </a>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Speak directly with our team</p>
              <a href="tel:+1234567890" className="text-emerald-600 hover:text-emerald-700 font-medium">
                +1 (234) 567-8900
              </a>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">Meet us in person for local clients</p>
              <p className="text-emerald-600 font-medium">
                Remote-first company
                <br />
                <span className="text-sm text-muted-foreground">Available worldwide</span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
