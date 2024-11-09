'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Palette, Laptop, Wrench } from "lucide-react"

export default function About() {
    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="max-w-6xl mx-auto pr-0 md:pr-12 lg:pr-24">
          {/* My Story Section */}
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start mb-24">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl font-bold">About me</h1>
                <div className="absolute -bottom-3 left-0 w-24 h-3 bg-blue-100 -z-10" />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hi, I&apos;m m Kushal! I&apos;m a passionate Software Engineer with a strong foundation
                in data structures, algorithms, and backend development. Currently, I&apos;m  in 
                my final year of B.Tech, with an upcoming role as a Software Engineer at Google.
                Over the past few years, I&apos;ve immersed myself in the tech field, honing my skills
                across various development projects and internships.
              </p>
            </div>
            <div className="hidden lg:block">
            <div className="relative w-full h-64"> {/* adjust the container height as needed */}
            <Image 
  src="/typing.jpeg" 
  alt="Person typing" 
  width={800}       // replace 800 with your desired width
  height={600}      // replace 600 with your desired height
  className="w-full h-auto rounded-2xl object-cover" 
/>

</div>

            </div>
          </div>
  
          {/* Technical Skills Section */}
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-4xl font-bold">
                My Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              I was introduced to the world of programming in my freshman year of college. I began to
              pursue various topics and areas of programming. I always try to learn new things and keep 
              experimenting around various fields/subfields to see what best fits my interest. 
              I started off with web-development and I still love to create creative web-apps. 
              I learnt MERN stack as my first tech-stack for full stack development and then went on to
            learn and work with various other tech-stacks like Django, python, NextJS etc.
            I am also very much interested in Web3 and would love to collaborate on any blockchain related projects.
                </p>
            </div>
            <div className="hidden lg:block">
            <Image 
  src="/image.jpg" 
  alt="Person typing" 
  width={800}       // replace with actual width
  height={600}      // replace with actual height
  className="w-full h-auto rounded-2xl object-cover" 
/>

            </div>
          </div>

          {/* Resume Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-50 rounded-2xl p-8 md:p-12 mb-24 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-bold">Take a look at my resume</h2>
                <div className="absolute -bottom-3 left-0 w-full h-3 bg-blue-100 -z-10" />
              </div>
            </div>
            <Button 
  className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-10 py-6 rounded-full text-lg"
  onClick={() => window.open('https://drive.google.com/file/d/1DHC82kQN6RIxrabeZSe0g7adneJTDUTL/view', '_blank')}
>
  Get in touch
</Button>

          </div>

       {/* Skills & Software Section */}
<div className="space-y-16 max-w-6xl mx-auto text-center">
  <div className="space-y-4">
    <div className="relative inline-block">
      <h2 className="text-3xl md:text-4xl font-bold">My skills & software</h2>
      <div className="absolute -bottom-3 left-0 w-full h-3 bg-blue-100 -z-10" />
    </div>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
    Experienced in web development, DevOps, and cloud technologies, I build scalable and efficient applications. 
    Skilled in modern frameworks, CI/CD, and cloud infrastructure to ensure seamless performance..
    </p>
  </div>

  {/* Center the grid container */}
  <div className="flex justify-center">
    <div className="grid md:grid-cols-3 gap-16 max-w-5xl">
      
      {/* Design Column */}
      <div className="space-y-6 text-center md:mx-8"> {/* Added md:mx-8 to add horizontal margin */}
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
          <Palette className="w-8 h-8 text-blue-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Development</h3>
          <ul className="space-y-3 text-gray-600">
            <li>React</li>
            <li>Javascript</li>
            <li>NextJS</li>
            <li>Tailwind-CSS</li>
            <li>Monorepo</li>
          </ul>
        </div>
      </div>

      {/* Development Column */}
      <div className="space-y-6 text-center md:mx-8"> {/* Added md:mx-8 to add horizontal margin */}
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
          <Laptop className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">DEV-ops</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Kubernetes</li>
            <li>CI/CD</li>
            <li>OpenAPI-Spec</li>
            <li>Bash Scripting</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>

      {/* Tools Column */}
      <div className="space-y-6 text-center md:mx-8"> {/* Added md:mx-8 to add horizontal margin */}
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8 text-purple-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Cloud</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Clouflare</li>
            <li>AWS</li>
            <li>GCP</li>
            <li>Cloud Logging and Monitoring</li>
            <li>Prometheus and Grafana </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
    </main>
      </div>
    )
  }