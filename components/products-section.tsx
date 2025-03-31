import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "A2 Bilona Gir Cow Ghee",
    description: "Pure and traditional ghee made from A2 milk using the ancient Bilona method.",
    price: "₹1980/kg",
    image: "/swa-vedic-farms-poster1.jpg",
    badge: "Bestseller",
    sizes: ["250g", "500g", "1kg"],
  },
  {
    id: 2,
    name: "A2 Gir Cow Milk",
    description: "Fresh and nutritious A2 milk from indigenous Gir cows, delivered daily.",
    price: "₹70/500ml",
    image: "/milk.png",
    sizes: ["500ml", "1L"],
  },
  {
    id: 3,
    name: "A2 Curd",
    description: "Probiotic-rich curd made from pure A2 milk, perfect for daily consumption.",
    price: "₹40/200g",
    image: "/dahi.jpg",
    sizes: ["200g", "500g"],
  },
  {
    id: 4,
    name: "A2 Butter",
    description: "Creamy and delicious butter made from A2 milk, perfect for cooking and spreading.",
    price: "₹80/100g",
    image: "butter.jpg",
    sizes: ["100g", "200g"],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary-foreground">
            Our Products
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pure & Traditional Dairy Products
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Discover our range of premium A2 dairy products made with traditional methods to preserve their natural
            goodness.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute right-2 top-2 bg-primary text-primary-foreground">{product.badge}</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

