"use client"

import { cn } from "@/lib/utils"
import { randomColor } from "@/lib/utils"
import { useChatStore } from "@/stores/use-chat-store"
import { Skeleton } from "@/components/ui/skeleton"
import { type Chat } from "@/types/db"

export function ChatItem({ chat }: { chat: Chat }) {
  const selectedChatId = useChatStore((state) => state.selectedChatId)
  const setSelectedChatId = useChatStore((state) => state.setSelectedChatId)

  return (
    <button
      key={chat.id}
      onClick={() => setSelectedChatId(chat.id)}
      className={cn(
        "flex w-full items-center gap-2 rounded-md border bg-background p-2 transition-colors",
        selectedChatId === chat.id
          ? "border-border shadow-xs"
          : "border-transparent hover:border-border/70"
      )}
    >
      <div
        style={{ backgroundColor: randomColor(chat.id) }}
        className="flex size-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px]"
      >
        {chat.name.charAt(0)}
      </div>

      <div className="w-full overflow-hidden text-left">
        <div className="flex w-full items-center justify-between gap-2 overflow-hidden">
          <p className="truncate font-sf-compact text-[10px] font-medium">
            {chat.name}
          </p>

          <p className="text-[8px] leading-none">{chat.time}</p>
        </div>
        <p className="truncate text-[10px] leading-tight text-muted-foreground">
          {chat.body}
        </p>
      </div>
    </button>
  )
}

ChatItem.Skeleton = function ChatItemSkeleton() {
  return (
    <div className="flex w-full items-center gap-2 rounded-md border bg-background p-2 transition-colors">
      <Skeleton className="size-5 shrink-0 rounded-full" />
      <div className="w-full space-y-[5.5px]">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-full max-w-16 rounded bg-foreground/10" />
          <Skeleton className="h-2.5 w-full max-w-6 rounded bg-foreground/10" />
        </div>
        <Skeleton className="h-2.5 w-full max-w-32 rounded bg-foreground/5" />
      </div>
    </div>
  )
}
