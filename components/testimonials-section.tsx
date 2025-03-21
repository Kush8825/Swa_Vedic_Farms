import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Health Enthusiast",
    content:
      "I've been using Swa Vedic Farms' A2 Ghee for over a year now, and I can truly feel the difference. The aroma and taste are incomparable to any store-bought ghee.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Ayurvedic Doctor",
    content:
      "As an Ayurvedic practitioner, I recommend Swa Vedic Farms' ghee to all my patients. The traditional Bilona method they use preserves all the medicinal properties of ghee.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Home Chef",
    content:
      "The quality of dairy products from Swa Vedic Farms is exceptional. Their A2 milk and ghee have elevated my cooking to a whole new level. My family can taste the difference!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Don't just take our word for it. Hear from our satisfied customers who have experienced the goodness of our
            products.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

