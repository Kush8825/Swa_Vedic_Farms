import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 py-20 md:py-28">
      <div className="absolute inset-0 bg-[url(/subtle-pattern.png)] opacity-10 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-amber-900">
              Experience the <span className="text-amber-600">Richness</span> of Tradition
            </h1>
            <p className="text-slate-700 md:text-xl max-w-lg leading-relaxed">
              Our A2 Bilona Gir Cow Ghee is made using the traditional Bilona method, 
              where we churn the curd to separate the butter, and then boil it to create a 
              rich, creamy ghee. This labor-intensive process ensures that our ghee 
              retains its natural nutrients and flavor, giving you a truly authentic taste experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link href="#products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-700 hover:bg-amber-50 font-medium px-8 rounded-full">
                <Link href="#process">Learn Our Process</Link>
              </Button>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-amber-100/20 z-10"></div>
              <div className="bg-amber-50 p-6 rounded-2xl">
                <Image
                  src="/swa-vedic-farms-hero.jpg"
                  alt="A2 Bilona Gir Cow Ghee"
                  width={600}
                  height={450}
                  className="object-contain rounded-xl z-20 relative transform transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-amber-200 rounded-full z-0 opacity-60 blur-xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full z-0 opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-amber-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-200 rounded-full opacity-10 blur-3xl"></div>
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L40 10C80 20 160 40 240 46.7C320 53.3 400 46.7 480 36.7C560 26.7 640 13.3 720 20C800 26.7 880 53.3 960 63.3C1040 73.3 1120 66.7 1200 56.7C1280 46.7 1360 33.3 1400 26.7L1440 20V100H1400C1360 100 1280 100 1200 100C1120 100 1040 100 960 100C880 100 800 100 720 100C640 100 560 100 480 100C400 100 320 100 240 100C160 100 80 100 40 100H0V0Z" fill="white" fillOpacity="0.8"/>
      </svg>
    </section>
  )
}