import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-12">One builder, focused on your success.</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card border border-card-border">
               <div className="w-full h-full flex items-center justify-center text-brand font-bold text-6xl opacity-20 select-none">
                  SD
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">The Solo Agency Philosophy</h2>
              <p className="text-muted text-lg leading-relaxed">
                I believe that small, focused teams (even teams of one) can deliver better results than bloated agencies. By removing the layers between the client and the builder, we ensure that every decision is informed by technical reality and every pixel serves a purpose.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                When you work with me, you get a partner who cares about your business as much as you do. I don&apos;t just write code; I help you build a product that works.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center border-t border-card-border pt-16">
            <div>
              <p className="text-4xl font-bold text-brand mb-2">5+</p>
              <p className="text-sm text-muted uppercase tracking-widest font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand mb-2">50+</p>
              <p className="text-sm text-muted uppercase tracking-widest font-medium">Projects Launched</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand mb-2">100%</p>
              <p className="text-sm text-muted uppercase tracking-widest font-medium">Direct Attention</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
