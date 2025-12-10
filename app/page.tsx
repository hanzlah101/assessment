import Image from "next/image"
import circleGif from "@/public/images/rotating-circle.gif"
import { GradientBG } from "@/components/gradient-bg"
import { Polygon } from "@/components/polygon"
import { AIIcon } from "@/components/icons/ai"
import { InboxIcon } from "@/components/icons/inbox"
import { UserIcon } from "@/components/icons/user"
import { WorkflowIcon } from "@/components/icons/workflow"
import { CampaignIcon } from "@/components/icons/campaign"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-svh flex-col bg-[#0C0C0C] px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-[24.5px]">
        <GradientBG />
        <Image
          priority
          unoptimized
          src={circleGif}
          alt="Portal"
          className="pointer-events-none fixed top-20 left-1/2 z-10 size-52 -translate-x-1/2 object-cover mix-blend-screen sm:top-24 sm:size-60 lg:top-[88.5px] lg:size-72"
        />

        <div className="sticky top-18 flex w-full flex-col items-center justify-center gap-3 px-6 pt-6 pb-8 text-white sm:px-10 sm:pb-12 lg:px-20 lg:pb-16">
          <Polygon className="absolute top-10 left-[20%]">
            <AIIcon />
          </Polygon>

          <Polygon className="absolute top-50 left-[8%] size-20">
            <InboxIcon className="size-6" />
          </Polygon>

          <Polygon className="absolute top-68 left-[25%] size-20">
            <UserIcon className="size-6" />
          </Polygon>

          <Polygon className="absolute top-40 right-[22%]">
            <WorkflowIcon className="text-white/60" />
          </Polygon>

          <Polygon className="absolute top-75 right-[12%] size-15">
            <CampaignIcon className="size-5 text-white" />
          </Polygon>

          <Polygon className="absolute top-10 right-[8%] size-20">
            <UserIcon className="size-6" />
          </Polygon>

          <h1 className="mt-60 text-center text-2xl leading-[120%] font-bold sm:mt-80 sm:text-3xl lg:text-[38px]">
            Extracting Information...
          </h1>
          <p className="max-w-xs text-center font-ronzino text-base leading-[140%] sm:max-w-sm lg:max-w-lg lg:text-lg lg:leading-[120%]">
            We are extracting information from the above honey combs to your
            system
          </p>
        </div>

        <Dashboard />
      </div>
    </>
  )
}
