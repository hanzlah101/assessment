"use client"

import { useChatStore } from "@/stores/use-chat-store"

export function ChatSearchInput() {
  const searchQuery = useChatStore((state) => state.searchQuery)
  const setSearchQuery = useChatStore((state) => state.setSearchQuery)

  return (
    <input
      type="text"
      value={searchQuery}
      placeholder="Search Chat"
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-0 py-1 font-sf-compact text-xs outline-none placeholder:text-muted-foreground"
    />
  )
}
