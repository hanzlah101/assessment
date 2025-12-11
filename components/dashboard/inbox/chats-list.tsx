"use client"

import { useChatsQuery } from "@/queries/use-chats-query"
import { ChatItem } from "./chat-item"
import { useChatStore } from "@/stores/use-chat-store"

import { useMemo } from "react"

export function ChatsList() {
  const { data, isLoading } = useChatsQuery()

  const searchQuery = useChatStore((state) => state.searchQuery)

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return data?.filter(
      (chat) =>
        chat.name.toLowerCase().includes(q) ||
        chat.body.toLowerCase().includes(q)
    )
  }, [data, searchQuery])

  if (isLoading) {
    return (
      <div className="space-y-1.5">
        {Array.from({ length: 10 }).map((_, index) => (
          <ChatItem.Skeleton key={index} />
        ))}
      </div>
    )
  }

  if (filteredData?.length === 0) {
    return (
      <div className="flex size-full items-center justify-center">
        <p className="text-xs text-muted-foreground">No chats found</p>
      </div>
    )
  }

  return (
    <div className="space-y-1.5 font-sf-compact">
      {filteredData?.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  )
}
