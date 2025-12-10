import Image from "next/image"
import bgGradient from "@/public/images/bg-gradient.png"

export function GradientBG() {
  return (
    <div className="dark relative flex flex-col bg-background px-3 py-3 text-foreground sm:px-4 sm:py-4 lg:px-6 lg:py-[24.5px]">
      <Image
        priority
        src={bgGradient}
        alt="Gradient Background"
        className="pointer-events-none fixed -top-78.5 left-177.5 size-[1455.72px] -rotate-105"
      />
      <Image
        priority
        src={bgGradient}
        alt="Gradient Background"
        className="pointer-events-none fixed top-0 -left-218 size-[1455.72px] rotate-30 opacity-55 mix-blend-difference"
      />

      <div className="fixed top-0 left-0 flex h-svh w-screen px-6 py-[24.5px]">
        <div className="size-full rounded-2xl border-2 border-white/10 bg-white/4 px-6 pt-6 pb-20 backdrop-blur-[30px] sm:rounded-3xl"></div>
      </div>
    </div>
  )
}
