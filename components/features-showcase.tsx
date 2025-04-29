import { Code2, GitBranch, Users, Lock, Globe, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type React from "react"

export default function FeaturesShowcase() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-white font-heading">
        Powerful Features for Modern Development
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          id="version-control"
          icon={<GitBranch className="h-8 w-8" />}
          title="Advanced Version Control"
          description="Built on top of Git with enhanced collaboration features for teams of all sizes."
        />
        <FeatureCard
          id="collaboration"
          icon={<Users className="h-8 w-8" />}
          title="Seamless Collaboration"
          description="Work together effortlessly with integrated code review and real-time discussion tools."
        />
        <FeatureCard
          icon={<Lock className="h-8 w-8" />}
          title="Enterprise-Grade Security"
          description="Protect your code and team with advanced security features and compliance tools."
        />
        <FeatureCard
          icon={<Globe className="h-8 w-8" />}
          title="Global Developer Network"
          description="Connect with millions of developers worldwide and share knowledge across projects."
        />
        <FeatureCard
          id="ai-assistant"
          icon={<Zap className="h-8 w-8" />}
          title="AI-Powered Assistance"
          description="Boost productivity with our advanced AI assistant and intelligent code suggestions."
        />
        <FeatureCard
          icon={<Code2 className="h-8 w-8" />}
          title="Modern Development Workflow"
          description="Support for all modern frameworks, CI/CD integrations, and cutting-edge development practices."
        />
      </div>
    </div>
  )
}

function FeatureCard({
  id,
  icon,
  title,
  description,
}: { id?: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <div
      id={id}
      className="group rounded-lg border border-purple-500/10 bg-purple-500/5 p-6 transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
    >
      <div className="mb-4 text-purple-400">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white font-heading">{title}</h3>
      <p className="text-white/70 font-sans">{description}</p>
      <Button
        variant="ghost"
        className="mt-4 px-0 text-purple-400 hover:text-purple-300 hover:bg-transparent font-sans group-hover:translate-x-2 transition-all duration-200"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
