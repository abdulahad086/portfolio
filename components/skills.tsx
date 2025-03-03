import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Terminal, PenToolIcon as Tool, Workflow } from "lucide-react"

const skillCategories = [
  {
    title: "Web Development",
    icon: <Layout className="h-5 w-5" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Networking",
    icon: <Globe className="h-5 w-5" />,
    skills: ["TCP/IP", "Cisco Packet Tracer", "Network Topologies"],
  },
  {
    title: "Software Design",
    icon: <Tool className="h-5 w-5" />,
    skills: ["UML", "Design Methodologies"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Workflow className="h-5 w-5" />,
    skills: ["Basic AI concepts", "Algorithms"],
  },
  {
    title: "Computer Science",
    icon: <Server className="h-5 w-5" />,
    skills: ["Compiler Construction", "Automata Theory", "Data Structures"],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Git", "VS Code", "Cisco Packet Tracer"],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Badge className="px-3 py-1 text-sm">Skills</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Technical Skills</h2>
        <p className="text-muted-foreground md:text-lg">Technologies and tools I work with</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

