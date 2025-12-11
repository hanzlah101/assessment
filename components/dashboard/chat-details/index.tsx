"use client"

import { Button } from "@/components/ui/button"
import { SidebarRightIcon } from "@/components/icons/sidebar"
import { ChatData } from "./chat-data"
import { ChatContactDetails } from "./chat-contact-details"
import { ChatContactLabels } from "./chat-contact-labels"
import { ChatNotes } from "./chat-notes"
import { ChatOtherCharts } from "./chat-other-charts"
import { useChatDetailsQuery } from "@/queries/use-chat-details-query"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function ChatDetails() {
  const { data, isLoading } = useChatDetailsQuery()

  return (
    <aside className="h-full w-full max-w-73.5 overflow-y-auto rounded-lg bg-background font-sf-compact">
      <nav className="flex items-center justify-between border-b px-4 py-3.5">
        <h1 className="text-[13px] font-semibold">Details</h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="fit" variant="muted-text-reverse">
              <SidebarRightIcon className="size-[11px]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Collapse Sidebar</TooltipContent>
        </Tooltip>
      </nav>

      {isLoading ? (
        <>
          <ChatData.Skeleton />
          <ChatContactDetails.Skeleton />
          <ChatContactLabels.Skeleton />
          <ChatNotes.Skeleton />
          <ChatOtherCharts.Skeleton />
        </>
      ) : (
        data && (
          <>
            <ChatData assignee={data.assignee} team={data.team} />
            <ChatContactDetails
              firstName={data.firstName}
              lastName={data.lastName}
              phone={data.phone}
              email={data.email}
            />
            <ChatContactLabels labels={data.labels} />
            <ChatNotes notes={data.notes} />
            <ChatOtherCharts charts={data.otherCharts} />
          </>
        )
      )}
    </aside>
  )
}
