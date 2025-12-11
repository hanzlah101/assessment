import { ChatForm } from "./chat-form"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"

export function Chat() {
  return (
    <div className="mx-1.5 flex size-full max-w-116 flex-1 shrink-0 flex-col overflow-hidden rounded-lg bg-background font-sf-compact">
      <ChatHeader />
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <ChatMessages />
        <ChatForm />
      </div>
    </div>
  )
}
