import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Airplane Management System",
    description: "A comprehensive database project for managing airplane operations, bookings, and schedules.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Database", "MySQL", "SQL", "Management System"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdulahad/airplane-management",
  },
  {
    title: "Bus Management System",
    description: "An object-oriented programming project for managing bus routes, schedules, and bookings.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["OOP", "C++", "Management System"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdulahad/bus-management",
  },
  {
    title: "Tree Topology Network Setup",
    description: "A networking lab project implementing tree topology for efficient network communication.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Networking", "Cisco Packet Tracer", "Tree Topology"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdulahad/tree-topology",
  },
  {
    title: "Compiler Construction Project",
    description: "A project focused on building components of a compiler including lexical analysis and parsing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Compiler", "Automata", "Programming Languages"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdulahad/compiler-project",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website showcasing my projects and skills. Built with modern web technologies.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/abdulahad/portfolio",
  },
]

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Badge className="px-3 py-1 text-sm">Projects</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Recent Work</h2>
        <p className="text-muted-foreground md:text-lg">Check out some of the projects I've worked on</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="default" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

