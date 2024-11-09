// Import necessary components and assets
'use client'
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { StaticImageData } from "next/image"


// Update the interface to accept StaticImageData or string for imageUrl
interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string | StaticImageData // Accept both types
  caseStudyUrl: string
  backgroundColor?: string
}

function ProjectCard({ title, description, imageUrl, caseStudyUrl, backgroundColor = "bg-blue-50" }: ProjectCardProps) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0 space-y-6">
        <div className={`rounded-3xl p-8 ${backgroundColor}`}>
          <div className="overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
            <img
              src={typeof imageUrl === "string" ? imageUrl : imageUrl.src} // Use .src if imageUrl is StaticImageData
              alt={title}
              className="w-full h-auto rounded-xl transition-transform duration-300"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <Link 
            href={caseStudyUrl}
            className="inline-flex items-center text-lg font-semibold hover:text-gray-600"
          >
            Project Link
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}


export default function Component() {
  const projects = [
    {
      title: "Course Management App",
      description: "A full-featured platform enabling admins to manage courses and users to purchase and track their enrolled classes.",
      imageUrl: "/course.png",
      caseStudyUrl: "https://github.com/kushallunkad22/Coursify",
      backgroundColor: "bg-blue-50"
    },
    {
      title: "Money Management App",
      description: "A secure and efficient app for tracking and managing personal money transactions, ensuring easy and organized financial oversight.",
      imageUrl: "/Money.png",
      caseStudyUrl: "https://github.com/kushallunkad22/payTM-clone",
      backgroundColor: "bg-pink-50"
    },
    {
        title: "Medium clone",
        description: "A blog-style platform where users can write, edit, and publish articles, emulating the functionality of Medium.",
        imageUrl: "/medium.png",
        caseStudyUrl: "https://github.com/kushallunkad22/medium-clone",
        backgroundColor: "bg-blue-50"
      },
      {
        title: "Quiz Application ",
        description: "An interactive quiz platform where users can test their knowledge, view scores, and see their ranking on the leaderboard.",
        imageUrl: "/quiz.jpg",
        caseStudyUrl: "https://github.com/kushallunkad22/quiz_app/tree/master",
        backgroundColor: "bg-pink-50"
      }
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              caseStudyUrl={project.caseStudyUrl}
              backgroundColor={project.backgroundColor}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
