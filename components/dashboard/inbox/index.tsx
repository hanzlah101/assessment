"use client"

import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarLeftIcon } from "@/components/icons/sidebar"
import { EditIcon } from "@/components/icons/edit"
import { SearchIcon } from "@/components/icons/search"
import { AdjustIcon } from "@/components/icons/adjust"
import { ChatsList } from "@/components/dashboard/inbox/chats-list"
import { ChatSearchInput } from "@/components/dashboard/inbox/chat-search-input"
import { useDashboardModal } from "@/stores/use-dashboard-modal"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function Inbox() {
  const onOpen = useDashboardModal((state) => state.onOpen)

  return (
    <div className="flex h-full w-full max-w-full shrink-0 flex-col rounded-r-lg bg-background/70 md:max-w-62.5">
      <nav className="flex shrink-0 items-center gap-2 border-b p-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="fit"
              variant="muted-text-reverse"
              onClick={() => onOpen("inbox-sidebar")}
              className="xl:hidden"
            >
              <SidebarLeftIcon className="size-[11px]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Open Sidebar</TooltipContent>
        </Tooltip>

        <p className="font-sf-compact text-xs font-semibold">Michael Johnson</p>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="fit" variant="muted-text-reverse" className="ml-auto">
              <EditIcon className="size-[11px]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit</TooltipContent>
        </Tooltip>
      </nav>

      <div className="flex shrink-0 flex-col p-4">
        <div className="flex items-center gap-2">
          <SearchIcon className="size-3" />

          <ChatSearchInput />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="fit"
                variant="muted-text-reverse"
                className="ml-auto"
              >
                <AdjustIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Filters</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center justify-between pt-4">
          <Button
            size="fit"
            variant="muted-text-reverse"
            className="gap-1 text-xs"
          >
            Open <ChevronDownIcon className="size-3" />
          </Button>

          <Button
            size="fit"
            variant="muted-text-reverse"
            className="gap-1 text-xs"
          >
            Newest <ChevronDownIcon className="size-3" />
          </Button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 pb-3">
        <ChatsList />
      </div>
    </div>
  )
}
