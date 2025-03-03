import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
      <div className="space-y-4 text-center md:text-left">
        <Badge className="px-3 py-1 text-sm" variant="secondary">
          Web Developer & CS Student
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Abdul Ahad</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">Full Stack Developer</h2>
        <p className="max-w-[600px] text-muted-foreground md:text-lg">
          I'm a passionate web developer and Computer Science student at FAST University, currently in my 5th semester.
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/abdulahad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/abdulahad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8702.JPG-M1DXzh1sS7eGRi9fSWnL7mA6rBYZxr.jpeg"
            alt="Abdul Ahad Profile"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/10"></div>
      </div>
    </div>
  )
}

