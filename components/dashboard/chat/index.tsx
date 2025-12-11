import { ChatForm } from "./chat-form"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { cn } from "@/lib/utils"

type ChatProps = {
  className?: string
}

export function Chat({ className }: ChatProps) {
  return (
    <div
      className={cn(
        "mx-1.5 flex h-full min-w-0 flex-1 flex-col overflow-hidden rounded-lg bg-background font-sf-compact",
        className
      )}
    >
      <ChatHeader />
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <ChatMessages />
        <ChatForm />
      </div>
    </div>
  )
}
