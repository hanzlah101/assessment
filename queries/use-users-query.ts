import { useMemo } from "react"
import { jsonPlaceholderApi } from "@/lib/api"
import { sleep } from "@/lib/utils"
import { User } from "@/types/db"
import { useQuery } from "@tanstack/react-query"
import { useChatStore } from "@/stores/use-chat-store"

export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await sleep(1)
      const { data } = await jsonPlaceholderApi.get<User[]>("/users")
      return data.map((user) => ({
        ...user,
        unreadCount: Math.floor(Math.random() * 100)
      }))
    }
  })
}

export function useSelectedUser() {
  const userId = useChatStore((state) => state.selectedUserId)
  const { data, isLoading } = useUsersQuery()
  const user = useMemo(
    () => data?.find((user) => user.id === userId),
    [data, userId]
  )
  return { user, isLoading }
}
