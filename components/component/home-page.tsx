import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/theme/ThemeToggle"

export function HomePage() {
  return (
    <div key="1" className="flex flex-col min-h-[100dvh] bg-[#021627] text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center gap-6">
        <Link className="flex items-center justify-center" href="#">
          <BrainIcon className="h-6 w-6 text-[#81E202]" />
          <span className="sr-only">LeetCode Prep</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            Contact
          </Link>
        </nav>
        <ModeToggle />
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#03223A]">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Conquer Leetcode Challenges with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-[#DDEEF8] md:text-xl dark:text-[#DDEEF8]">
                  Our AI-powered application provides personalized practice and guidance to help you
                  <span className="before-content-space bg-gradient-to-r from-[#81E202] to-[#DDEEF8] bg-clip-text text-transparent">
                  &nbsp;ace your next technical interview.
                  </span>
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#0676C6] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0676C6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0676C6] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#81E202] dark:text-[#021627] dark:hover:bg-[#81E202]/90 dark:focus-visible:ring-[#81E202]"
                    href="#"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/hero.jpeg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#021627]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#DDEEF8]">
                  Unlock Your Coding Potential
                </h2>
                <p className="max-w-[900px] text-[#DDEEF8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered application provides personalized practice and guidance to help you conquer
                  Leetcode-style challenges and
                  <span className="bg-gradient-to-tr from-[#DDEEF8] to-[#81E202] bg-clip-text text-transparent">
                  &nbsp;ace your next technical interview
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0676C6] p-2 rounded-full">
                    <PuzzleIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#DDEEF8]">Personalized Practice</h3>
                </div>
                <p className="text-sm text-[#DDEEF8] dark:text-[#DDEEF8]">
                  Our AI-powered algorithm analyzes your strengths and weaknesses to provide tailored practice problems
                  and solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0676C6] p-2 rounded-full">
                    <LightbulbIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#DDEEF8]">Adaptive Difficulty</h3>
                </div>
                <p className="text-sm text-[#DDEEF8] dark:text-[#DDEEF8]">
                  The difficulty of the practice problems adjusts based on your progress, ensuring you're always
                  challenged at the right level.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0676C6] p-2 rounded-full">
                    <RocketIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#DDEEF8]">Comprehensive Guidance</h3>
                </div>
                <p className="text-sm text-[#DDEEF8] dark:text-[#DDEEF8]">
                  Detailed explanations, step-by-step solutions, and performance analytics help you understand and
                  improve your coding skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#03223A]">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-[#DDEEF8] to-[#81E202] bg-clip-text text-transparent">
                Prepare for Your Dream Job
              </h2>
              <p className="max-w-[600px] text-[#DDEEF8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered application helps you develop the skills and confidence needed to excel in your next
                technical interview.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#0676C6] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0676C6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0676C6] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#81E202] dark:text-[#021627] dark:hover:bg-[#81E202]/90 dark:focus-visible:ring-[#81E202]"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#DDEEF8] border-[#DDEEF8] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#DDEEF8]/10 hover:text-[#DDEEF8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DDEEF8] disabled:pointer-events-none disabled:opacity-50 dark:border-[#81E202] dark:border-[#81E202] dark:bg-transparent dark:hover:bg-[#81E202]/10 dark:hover:text-[#81E202] dark:focus-visible:ring-[#81E202]"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#03223A]">
        <p className="text-xs text-[#DDEEF8] dark:text-[#DDEEF8]">© 2024 LeetCode Prep. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-[#DDEEF8]" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BrainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}


function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
