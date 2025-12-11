import { UserRoundedIcon } from "@/components/icons/user-rounded"
import { CollapsibleSection } from "./collapsible-section"
import { Skeleton } from "@/components/ui/skeleton"

type ChatDataProps = {
  assignee: string
  team: string
}

export function ChatData({ assignee, team }: ChatDataProps) {
  return (
    <CollapsibleSection title="Contact Data" className="space-y-3">
      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">Assignee</p>
        <p className="col-span-2 flex items-center gap-1 font-semibold">
          <UserRoundedIcon className="size-3.5 shrink-0" />
          {assignee}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">Team</p>
        <p className="col-span-2 flex items-center gap-1 font-semibold">
          <UserRoundedIcon className="size-3.5 shrink-0" />
          {team}
        </p>
      </div>
    </CollapsibleSection>
  )
}

ChatData.Skeleton = function ChatDataSkeleton() {
  return (
    <CollapsibleSection.Skeleton className="space-y-3">
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="grid grid-cols-3 gap-x-8">
          <Skeleton className="col-span-1 h-2.5 w-full rounded" />
          <div className="col-span-2 flex min-h-3.75 items-center gap-1">
            <UserRoundedIcon className="size-3.5 shrink-0 text-muted-foreground/50" />
            <Skeleton className="h-2.5 w-1/2 rounded" />
          </div>
        </div>
      ))}
    </CollapsibleSection.Skeleton>
  )
}
