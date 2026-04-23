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
          'Wisdom Ossai is a Senior Frontend Developer based in Lagos, Nigeria with 5+ years of experience building pixel-perfect, accessible, and performant web applications using React, TypeScript, and Next.js.',
      },
      {
        name: 'keywords',
        content:
          'frontend developer, react developer, typescript, next.js, UI engineer, web developer, Lagos, Nigeria, portfolio, javascript, tailwind css',
      },
      { name: 'author', content: 'Wisdom Ossai' },
      {
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://wisdom-ossai.netlify.app/' },
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
        content: 'https://wisdom-ossai.netlify.app/profile.png',
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
        content: 'https://wisdom-ossai.netlify.app/profile.png',
      },
      {
        name: 'twitter:image:alt',
        content: 'Wisdom Ossai – Senior Frontend Developer',
      },

      // PWA
      { name: 'theme-color', content: '#0a0a0a' },
    ],
    links: [
      { rel: 'canonical', href: 'https://wisdom-ossai.netlify.app/' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://wisdom-ossai.netlify.app',
        crossOrigin: 'anonymous',
      },
      { rel: 'dns-prefetch', href: 'https://wisdom-ossai.netlify.app' },
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
              '@id': 'https://wisdom-ossai.netlify.app/#person',
              name: 'Wisdom Ossai',
              url: 'https://wisdom-ossai.netlify.app/',
              image: {
                '@type': 'ImageObject',
                url: 'https://wisdom-ossai.netlify.app/profile.png',
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
                addressLocality: 'Lagos, Nigeria',
                addressRegion: 'LA',
                addressCountry: 'NG',
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
              '@id': 'https://wisdom-ossai.netlify.app/#website',
              url: 'https://wisdom-ossai.netlify.app/',
              name: 'Wisdom Ossai – Frontend Developer Portfolio',
              description:
                'Portfolio website of Wisdom Ossai, Senior Frontend Developer based in Lagos, Nigeria.',
              author: { '@id': 'https://wisdom-ossai.netlify.app/#person' },
              inLanguage: 'en-US',
            },
            {
              '@type': 'WebPage',
              '@id': 'https://wisdom-ossai.netlify.app/#webpage',
              url: 'https://wisdom-ossai.netlify.app/',
              name: 'Wisdom Ossai | Senior Frontend Developer – React, TypeScript & UI Engineering',
              isPartOf: { '@id': 'https://wisdom-ossai.netlify.app/#website' },
              about: { '@id': 'https://wisdom-ossai.netlify.app/#person' },
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
                    item: 'https://wisdom-ossai.netlify.app/',
                  },
                ],
              },
            },
            {
              '@type': 'ProfilePage',
              mainEntity: { '@id': 'https://wisdom-ossai.netlify.app/#person' },
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
