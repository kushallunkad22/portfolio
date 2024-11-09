'use client'
import Link from "next/link"
import { Mail, Menu, Smile, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <header className="px-4 lg:px-8 h-20 flex items-center justify-between max-w-7xl mx-auto">
        <Link className="flex items-center text-xl font-semibold" href="/" >
          <Smile className="h-6 w-6 mr-2" />
          Kushal Lunkad
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link className="text-gray-600 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="/about">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="/projects">
            Projects
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            className="hidden md:flex items-center text-sm text-gray-600 hover:text-gray-900"
            href="mailto:kushallunkad456@gmail.com"
          >
            <Mail className="h-4 w-4 mr-2" />
            kushallunkad456@gmail.com
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-8 bg-white">
            <Link className="py-2 text-gray-900 font-medium" href="/">
              Home
            </Link>
            <Link className="py-2 text-gray-600 hover:text-gray-900" href="/about">
              About
            </Link>
            <Link className="py-2 text-gray-600 hover:text-gray-900" href="/projects">
              Projects
            </Link>
          </nav>
        </div>
      )}
        </div>
    )
}