import AboutSection from '#/components/AboutSection'
import ContactSection from '#/components/ContactSection'
import ExperienceSection from '#/components/ExperienceSection'
import Footer from '#/components/Footer'
import HeroSection from '#/components/HeroSection'
import Navbar from '#/components/Navbar'
import ProjectsSection from '#/components/ProjectsSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      {/* Skip-to-content link for screen readers & accessibility (also good for SEO) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="bg-[#0a0a0a] min-h-screen">
        {/* Landmark: banner */}
        <header role="banner">
          <Navbar />
        </header>

        {/* Landmark: main */}
        <main id="main-content" role="main">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Landmark: contentinfo */}
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    </>
  )
}
