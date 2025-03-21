import Hero from "@/components/hero"
import ProductsSection from "@/components/products-section"
import AboutSection from "@/components/about-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

