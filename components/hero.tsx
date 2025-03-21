import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Experience the Richness of Tradition
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Our A2 Bilona Gir Cow Ghee is made using the traditional Bilona method, where we churn the curd to
              separate the butter, and then boil it to create a rich, creamy ghee. This labor-intensive process ensures
              that our ghee retains its natural nutrients and flavor, giving you a truly authentic taste experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#process">Learn Our Process</Link>
              </Button>
            </div>
          </div>
          
          {/* Rectangular Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <Image
                src="/spoon.jpg"
                alt="A2 Bilona Gir Cow Ghee"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}