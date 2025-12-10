import { DashboardHeader } from "./header"
import { InboxSidebar } from "./inbox-sidebar"

export function Dashboard() {
  return (
    <div className="z-20 mx-auto mb-4 w-full max-w-[calc(100%-48px)] bg-card p-1.5 text-card-foreground xl:max-w-300">
      <DashboardHeader />
      <div className="mt-1.5 flex items-start">
        <InboxSidebar />
      </div>
    </div>
  )
}
