import { sleep, pick } from "@/lib/utils"
import { Message } from "@/types/db"
import { useQuery } from "@tanstack/react-query"
import { jsonPlaceholderApi } from "@/lib/api"
import { useCurrentUserQuery } from "@/queries/use-current-user-query"
import { subDays, setHours, setMinutes } from "date-fns"
import { useChatStore } from "@/stores/use-chat-store"

type Comment = {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export function useMessagesQuery() {
  const { data: currentUser } = useCurrentUserQuery()
  const selectedChatId = useChatStore((state) => state.selectedChatId)

  return useQuery<Message[]>({
    queryKey: ["messages", selectedChatId, currentUser?.id],
    queryFn: async () => {
      await sleep(0.8)

      const { data: comments } =
        await jsonPlaceholderApi.get<Comment[]>("/comments")

      const now = new Date()
      const daysAgo = [4, 3, 2, 1, 0]
      const messagesPerDay = 10
      const userIds = [currentUser?.id ?? 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const messages: Message[] = []

      daysAgo.forEach((dayOffset, dayIndex) => {
        const baseDate = subDays(now, dayOffset)
        const startOfDay = setHours(setMinutes(baseDate, 0), 0)

        for (let i = 0; i < messagesPerDay; i++) {
          const commentIndex = dayIndex * messagesPerDay + i
          const comment = comments[commentIndex % comments.length]

          const hour = 8 + Math.floor((i / messagesPerDay) * 14)
          const minute = Math.floor((i % 4) * 15)
          const timestamp = setMinutes(setHours(startOfDay, hour), minute)

          const isCurrentUser = Math.random() > 0.4
          const otherUserIds = userIds.filter((id) => id !== currentUser?.id)
          const senderId = isCurrentUser
            ? (currentUser?.id ?? 1)
            : pick(otherUserIds)

          messages.push({
            id: comment.id,
            senderId: senderId ?? 1,
            body: comment.body,
            timestamp
          })
        }
      })

      return messages.sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
      )
    }
  })
}
