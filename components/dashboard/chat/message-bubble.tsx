import { cn } from "@/lib/utils"
import { Message } from "@/types/db"
import { format } from "date-fns"
import { Skeleton } from "@/components/ui/skeleton"
import { useCurrentUserQuery } from "@/queries/use-current-user-query"
import { DoubleCheckIcon } from "@/components/icons/double-check"

export function MessageBubble({ message }: { message: Message }) {
  const { data: currentUser } = useCurrentUserQuery()
  const isCurrentUser = message.senderId === currentUser?.id

  return (
    <div
      className={cn(
        "flex items-start gap-2",
        isCurrentUser ? "flex-row-reverse self-end" : "self-start"
      )}
    >
      <div
        className={cn(
          "max-w-75 rounded-lg p-2 text-[10px]",
          isCurrentUser ? "bg-[#EDE3FD] text-black" : "bg-muted"
        )}
      >
        {message.body}
      </div>

      <div className="flex flex-col items-center space-y-0.5">
        <p className="text-[7px] whitespace-nowrap">
          {format(message.timestamp, "h:mm a")}
        </p>
        {isCurrentUser && <DoubleCheckIcon />}
      </div>
    </div>
  )
}

MessageBubble.Skeleton = function MessageBubbleSkeleton({
  index
}: {
  index: number
}) {
  const isCurrentUser = index % 2 === 0

  return (
    <div
      className={cn(
        "flex items-start gap-2",
        isCurrentUser ? "flex-row" : "flex-row-reverse"
      )}
    >
      <Skeleton
        className={cn(
          "w-full max-w-75 shrink-0 rounded-lg",
          isCurrentUser ? "h-10" : "h-14"
        )}
      />

      <div className="flex flex-col items-center space-y-1">
        <Skeleton className="h-[10.5px] w-6" />
        {!isCurrentUser && <DoubleCheckIcon />}
      </div>
    </div>
  )
}
