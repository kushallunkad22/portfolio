'use client'
import Image from "next/image"
import image from './../public/typing.jpeg'
import myphoto from './../public/image.jpeg'
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
                Hi, I'm Kushal! I'm a passionate Software Engineer with a strong foundation
                in data structures, algorithms, and backend development. Currently, I'm in 
                my final year of B.Tech, with an upcoming role as a Software Engineer at Google.
                Over the past few years, I've immersed myself in the tech field, honing my skills
                across various development projects and internships.
              </p>
            </div>
            <div className="hidden lg:block">
              <Image src={image} alt="Person typing" className="w-full h-auto rounded-2xl object-cover" />
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
              <Image src={myphoto} alt="Person typing" className="w-full h-auto rounded-2xl object-cover" />
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
              onClick={() => window.open('/your-resume.pdf', '_blank')}
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.
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
          <h3 className="text-xl font-bold">Design</h3>
          <ul className="space-y-3 text-gray-600">
            <li>UI/UX Design</li>
            <li>Product Design</li>
            <li>Web Design</li>
            <li>Design Thinking</li>
            <li>Branding</li>
          </ul>
        </div>
      </div>

      {/* Development Column */}
      <div className="space-y-6 text-center md:mx-8"> {/* Added md:mx-8 to add horizontal margin */}
        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
          <Laptop className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Development</h3>
          <ul className="space-y-3 text-gray-600">
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>No Code</li>
          </ul>
        </div>
      </div>

      {/* Tools Column */}
      <div className="space-y-6 text-center md:mx-8"> {/* Added md:mx-8 to add horizontal margin */}
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8 text-purple-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Tools</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Webflow</li>
            <li>Figma</li>
            <li>Notion</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
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