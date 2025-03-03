import { Button } from "@/components/ui/button"
import { MoveDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home" className="container py-24 sm:py-32">
          <Hero />
          <div className="flex justify-center mt-8">
            <Link href="#about">
              <Button variant="outline" size="lg" className="rounded-full">
                Learn more <MoveDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32">
          <About />
        </section>

        <section id="skills" className="bg-muted/50">
          <div className="container py-24 sm:py-32">
            <Skills />
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32">
          <Projects />
        </section>

        <section id="experience" className="bg-muted/50">
          <div className="container py-24 sm:py-32">
            <Experience />
          </div>
        </section>

        <section id="contact" className="container py-24 sm:py-32">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

