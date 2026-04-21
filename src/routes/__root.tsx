import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // Primary SEO
      {
        title:
          'Wisdom Ossai | Senior Frontend Developer – React, TypeScript & UI Engineering',
      },
      {
        name: 'description',
        content:
          'Wisdom Ossai is a Senior Frontend Developer based in San Francisco with 5+ years of experience building pixel-perfect, accessible, and performant web applications using React, TypeScript, and Next.js.',
      },
      {
        name: 'keywords',
        content:
          'frontend developer, react developer, typescript, next.js, UI engineer, web developer, san francisco, portfolio, javascript, tailwind css',
      },
      { name: 'author', content: 'Wisdom Ossai' },
      {
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://wisdomossai.dev/' },
      {
        property: 'og:site_name',
        content: 'Wisdom Ossai – Frontend Developer',
      },
      {
        property: 'og:title',
        content:
          'Wisdom Ossai | Senior Frontend Developer – React & TypeScript',
      },
      {
        property: 'og:description',
        content:
          'Senior Frontend Developer with 5+ years of experience crafting pixel-perfect, accessible, and performant web experiences. Available for freelance, contract, and full-time roles.',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'Wisdom Ossai – Senior Frontend Developer portfolio preview',
      },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@wisdomossaidev' },
      { name: 'twitter:creator', content: '@wisdomossaidev' },
      {
        name: 'twitter:title',
        content: 'Wisdom Ossai | Senior Frontend Developer',
      },
      {
        name: 'twitter:description',
        content:
          'Senior Frontend Developer crafting pixel-perfect, accessible, and performant web experiences using React, TypeScript, and Next.js.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop',
      },
      {
        name: 'twitter:image:alt',
        content: 'Wisdom Ossai – Senior Frontend Developer',
      },

      // PWA
      { name: 'theme-color', content: '#0a0a0a' },
    ],
    links: [
      { rel: 'canonical', href: 'https://wisdomossai.dev/' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://images.unsplash.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              '@id': 'https://wisdomossai.dev/#person',
              name: 'Wisdom Ossai',
              url: 'https://wisdomossai.dev/',
              image: {
                '@type': 'ImageObject',
                url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                width: 400,
                height: 400,
              },
              jobTitle: 'Senior Frontend Developer',
              description:
                'Senior Frontend Developer with 5+ years of experience building pixel-perfect, accessible, and performant web applications using React, TypeScript, and Next.js.',
              sameAs: [
                'https://github.com/wisdomossai',
                'https://linkedin.com/in/wisdomossai',
                'https://twitter.com/wisdomossaidev',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San Francisco',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              email: 'ossaiwisdom48@gmail.com',
              knowsAbout: [
                'React',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'Figma',
                'UI Engineering',
                'Frontend Development',
                'Web Performance',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://wisdomossai.dev/#website',
              url: 'https://wisdomossai.dev/',
              name: 'Wisdom Ossai – Frontend Developer Portfolio',
              description:
                'Portfolio website of Wisdom Ossai, Senior Frontend Developer based in San Francisco.',
              author: { '@id': 'https://wisdomossai.dev/#person' },
              inLanguage: 'en-US',
            },
            {
              '@type': 'WebPage',
              '@id': 'https://wisdomossai.dev/#webpage',
              url: 'https://wisdomossai.dev/',
              name: 'Wisdom Ossai | Senior Frontend Developer – React, TypeScript & UI Engineering',
              isPartOf: { '@id': 'https://wisdomossai.dev/#website' },
              about: { '@id': 'https://wisdomossai.dev/#person' },
              description:
                "Wisdom Ossai's professional portfolio showcasing frontend development projects, experience, and skills.",
              inLanguage: 'en-US',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://wisdomossai.dev/',
                  },
                ],
              },
            },
            {
              '@type': 'ProfilePage',
              mainEntity: { '@id': 'https://wisdomossai.dev/#person' },
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
