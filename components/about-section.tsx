import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  const galleryImages = [
    {
      src: "/cows.jpg",
      alt: "Gir Cows at Swa Vedic Farms",
      title: "Our Indigenous Gir Cows"
    },
    {
      src: "/a2ghee.jpg", 
      alt: "Traditional Bilona Ghee Making Process",
      title: "Traditional Bilona Process"
    },
    {
      src: "/cows.jpg", 
      alt: "Swa Vedic Farms Landscape",
      title: "Our Farm Environment"
    },
    {
      src: "/home_pic.jpg", 
      alt: "Pure A2 Dairy Products",
      title: "Premium A2 Products"
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image Gallery Section */}
          <div className="space-y-4 lg:order-last">
            {/* Main Featured Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt} 
                fill 
                className="object-cover transition-transform duration-300 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">{galleryImages[0].title}</h4>
                </div>
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-md shadow-md group cursor-pointer">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover transition-all duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-medium text-center px-2">{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
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