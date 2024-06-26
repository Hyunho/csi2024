import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

// export const metadata: Metadata = {
//   title: 'VENUES',
  // description:
  //   'I’m Spencer Sharp. I live in New York City, where I design the future.',
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function VENUES() {
  return (
    <Container className="mt-20 sm:mt-32">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          CheongShim International Youth Center
          <br />
          (효정국제문화재단 청심국제청소년수련원)
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-5">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <div className='mt-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.620547491171!2d127.51905837570938!3d37.681623072009025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356324cb17e84819%3A0x9067ccf18012fe18!2z7LKt7Ius7LKt7IaM64WE7IiY66Co7JuQ!5e0!3m2!1sko!2skr!4v1702472266007!5m2!1sko!2skr"
                  width="500"
                  height="400"
                  allowFullScreen
                  loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="mt-5 lg:pl-5">
            <div>
              <p>
                278-64, Misari-ro, Seorak-myeon, Gapyeong-gun, Gyeonggi-do, 12461, Republic of Korea
                <br/>
                경기도 가평군 설악면 미사리로 278-64 (경기도 가평군 설악면 송산리 595번지)
              </p>
            </div>
            <div className='mt-5'>
              <ul role="list">
                <li>
                  - <Link href='https://youth.ciyc.co.kr' className='underline'>Link to website</Link>
                </li>
                <li>
                  - <Link href='https://maps.app.goo.gl/ZeGDh1xFxvwh3FHy8' className='underline'>Link to google maps</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="lg:order-first lg:row-span-2">
          <div>
          </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            경기도 가평군 설악면 미사리로 278-64 (경기도 가평군 설악면 송산리 595번지)
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div> */}
        
      </div>
    </Container>
  )
}
