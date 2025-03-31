import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const processes = [
  {
    id: 1,
    title: "Ethical Sourcing",
    description: "Our milk comes from indigenous Gir cows that are raised with love and care in a natural environment.",
    icon: "/Ethical Sourcing.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Traditional Churning",
    description: "We use the ancient Bilona method to churn curd and extract butter, preserving all natural nutrients.",
    icon: "/Traditional.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Slow Cooking",
    description: "The butter is slowly cooked to create ghee, allowing impurities to separate naturally.",
    icon: "Slow Cooking.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Quality Testing",
    description: "Each batch undergoes rigorous quality testing to ensure purity, aroma, and flavor.",
    icon: "/Quality Testing.svg?height=100&width=100",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
            Our Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Traditional Bilona Method</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            We follow the ancient Vedic method of making ghee, preserving tradition and ensuring the highest quality.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processes.map((process) => (
            <Card key={process.id} className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Image
                    src={process.icon || "/placeholder.svg"}
                    alt={process.title}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <CardTitle>{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{process.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 rounded-lg bg-secondary p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Why the Bilona Method Matters</h3>
              <p className="text-muted-foreground">
                The traditional Bilona method involves hand-churning curd to extract butter, which is then slowly heated
                to create ghee. This process preserves the natural nutrients, enzymes, and flavor compounds that are
                often lost in industrial production methods. The result is a ghee with superior taste, aroma, and health
                benefits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Preserves essential vitamins and nutrients</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Enhances natural aroma and flavor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Longer shelf life without preservatives</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>Higher medicinal and Ayurvedic value</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3lIcH7LX3r59bxgnGw4fDcK1oTBPef.png"
                alt="Traditional Bilona Method"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

