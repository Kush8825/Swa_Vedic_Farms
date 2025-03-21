import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
            <Image src="/cows.jpg" alt="Swa Vedic Farms" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey of Tradition & Purity</h2>
            <p className="text-muted-foreground md:text-lg">
              Swa Vedic Farms was established with a vision to revive traditional dairy practices and provide pure,
              unadulterated A2 dairy products to modern consumers. Our farm is home to indigenous Gir cows that are
              treated with love and care, ensuring the highest quality milk for our products.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>100% Pure A2 milk from indigenous Gir cows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Traditional Bilona method for ghee production</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>No chemicals, preservatives, or additives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Ethical and sustainable farming practices</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

