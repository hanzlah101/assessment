"use client"

import { Button } from "@/components/ui/button"
import { EllipsisVerticalIcon, InfoIcon } from "lucide-react"
import { useSelectedChat } from "@/queries/use-chats-query"
import { Skeleton } from "@/components/ui/skeleton"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArchiveIcon } from "@/components/icons/archive"
import { useDashboardModal } from "@/stores/use-dashboard-modal"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function ChatHeader() {
  const onOpen = useDashboardModal((state) => state.onOpen)

  return (
    <nav className="flex items-center justify-between border-b px-6 py-3 font-sf-compact">
      <UserName />

      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon-sm"
              className="size-6 xl:hidden"
              variant="secondary"
              onClick={() => onOpen("chat-details")}
            >
              <InfoIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Chat Details</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon-sm" className="size-6" variant="secondary">
              <EllipsisVerticalIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Options</TooltipContent>
        </Tooltip>

        <ThemeToggle />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon-sm" className="size-6" variant="foreground">
              <ArchiveIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive Chat</TooltipContent>
        </Tooltip>
      </div>
    </nav>
  )
}

function UserName() {
  const { chat, isLoading } = useSelectedChat()
  if (isLoading) return <Skeleton className="h-4 w-full max-w-28 rounded" />
  return <p className="text-[13px] font-bold">{chat?.name}</p>
}
