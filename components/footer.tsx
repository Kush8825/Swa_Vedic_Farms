import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Send, Phone, Mail, MapPin, PhoneIcon as WhatsApp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-playfair font-bold text-primary-foreground">SV</span>
                </div>
              </div>
              <span className="font-playfair text-xl font-bold">Swa Vedic Farms</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience the richness of tradition with our pure A2 Bilona Gir Cow Ghee and premium dairy products.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/swa_vedic_farm_1967?igsh=MW0zODRjdjBmbTEwMg==" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.facebook.com/share/15hAUEWKSQ/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://chat.whatsapp.com/Co4Y2Pb0p51DHJngqu9j76" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                  <WhatsApp className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="WhatsApp">
                  <WhatsApp className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-primary">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Swa Vedic Farms, At: Bhavali, Post: Daskebardi, Tal: Chalisgaon, Dist: Jalgaon</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+91 9588479851</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>a2.swavedic@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on new products and special offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" className="max-w-[220px]" />
              <Button size="icon" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Swa Vedic Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

