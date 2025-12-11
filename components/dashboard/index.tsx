import { Chat } from "./chat"
import { ChatDetails } from "./chat-details"
import { DashboardHeader } from "./header"
import { Inbox } from "./inbox"
import { InboxSidebar } from "./inbox-sidebar"

export function Dashboard() {
  return (
    <div className="z-20 mx-auto mb-4 w-full max-w-[calc(100%-48px)] bg-card p-1.5 text-card-foreground xl:max-w-300">
      <DashboardHeader />
      <div className="mt-1.5 flex h-145 items-start">
        <InboxSidebar />
        <Inbox />
        <Chat />
        <ChatDetails />
      </div>
    </div>
  )
}
