import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, PhoneIcon as WhatsApp } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
            Contact Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Have questions about our products or want to place an order? Reach out to us and we'll get back to you as
            soon as possible.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Email" type="email" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us directly through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">Swa Vedic Farms, At: Bhavali, Post: Daskebardi, Tal: Chalisgaon, Dist: Jalgaon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 9588479851</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">a2.swavedic@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">24 x 7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
                <CardDescription>Follow us on social media for updates and special offers.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Link href="https://www.instagram.com/swa_vedic_farm_1967?igsh=MW0zODRjdjBmbTEwMg==" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://www.facebook.com/share/15hAUEWKSQ/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                 
                  <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <WhatsApp className="h-5 w-5" />
                      <span className="sr-only">WhatsApp</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

