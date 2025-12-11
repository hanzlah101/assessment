import { useMemo } from "react"
import { sleep } from "@/lib/utils"
import { Chat } from "@/types/db"
import { pick } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { randomMessages, randomNames } from "@/lib/data"
import { useChatStore } from "@/stores/use-chat-store"

export function useChatsQuery() {
  return useQuery<Chat[]>({
    queryKey: ["chats"],
    queryFn: async () => {
      await sleep(1)

      return Array.from({ length: 10 }).map((_, idx) => ({
        id: idx + 1,
        name: pick(randomNames),
        body: pick(randomMessages),
        time: `${12 + (idx % 5)}:${String(idx).padStart(2, "0")}`
      }))
    }
  })
}

export function useSelectedChat() {
  const chatId = useChatStore((state) => state.selectedChatId)
  const { data, isLoading } = useChatsQuery()
  const chat = useMemo(
    () => data?.find((chat) => chat.id === chatId),
    [data, chatId]
  )
  return { chat, isLoading }
}
