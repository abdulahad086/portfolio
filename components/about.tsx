import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Badge className="px-3 py-1 text-sm">About Me</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get to know me</h2>
        <p className="text-muted-foreground md:text-lg">
          Learn more about my background, experience, and what drives me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">My Background</h3>
            <p className="text-muted-foreground">
              I'm a passionate web developer and a Computer Science student at FAST University, currently in my 5th
              semester. I specialize in building efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-muted-foreground">
              With hands-on experience in software development, system analysis, networking, and AI, I strive to create
              impactful digital solutions that solve real-world problems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">My Approach</h3>
            <p className="text-muted-foreground">
              I believe in creating clean, maintainable code that solves real problems. User experience is at the heart
              of everything I build, ensuring that applications are not only functional but also intuitive and
              accessible.
            </p>
            <p className="text-muted-foreground">
              I enjoy working in collaborative environments where I can learn from others and contribute my expertise.
              I'm always open to feedback and continuously strive to improve my craft.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">When I'm not coding</h3>
            <p className="text-muted-foreground">
              Outside of development, I'm actively involved in campus activities. I serve as the Marketing Head for
              Symphonics, a live music community, and as the Coverage Head for Silent Steps Society, handling event
              management and media coverage. These roles have helped me develop strong leadership and communication
              skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

