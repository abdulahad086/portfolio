import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Marketing Head",
    company: "Symphonics",
    period: "2022 - Present",
    description: "Leading the marketing efforts for Symphonics, a live music community at FAST University.",
    responsibilities: [
      "Developing and implementing marketing strategies for music events",
      "Managing social media presence and content creation",
      "Coordinating with team members to ensure successful event promotion",
      "Analyzing marketing metrics and adjusting strategies accordingly",
      "Building and maintaining relationships with sponsors and partners",
    ],
  },
  {
    title: "Coverage Head",
    company: "Silent Steps Society",
    period: "2021 - Present",
    description:
      "Managing event coverage and media production for Silent Steps Society, an event management organization.",
    responsibilities: [
      "Overseeing photography and videography teams for event coverage",
      "Coordinating media production workflows for efficient content delivery",
      "Ensuring high-quality media content for all events",
      "Training new team members on coverage protocols and standards",
      "Collaborating with other departments to align media coverage with event goals",
    ],
  },
  {
    title: "Computer Science Student",
    company: "FAST University",
    period: "2021 - Present",
    description: "Currently pursuing a Bachelor's degree in Computer Science, currently in 5th semester.",
    responsibilities: [
      "Maintaining strong academic performance in core CS subjects",
      "Participating in programming competitions and hackathons",
      "Completing coursework in algorithms, data structures, and software engineering",
      "Collaborating with peers on group projects and assignments",
      "Applying theoretical knowledge through practical projects",
    ],
  },
]

export default function Experience() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Badge className="px-3 py-1 text-sm">Experience</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Leadership</h2>
        <p className="text-muted-foreground md:text-lg">My professional journey and roles</p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription className="text-base">{experience.company}</CardDescription>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{experience.description}</p>
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4" /> Key Responsibilities
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

