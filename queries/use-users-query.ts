import { jsonPlaceholderApi } from "@/lib/api"
import { User } from "@/types/db"
import { useQuery } from "@tanstack/react-query"

export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const { data } = await jsonPlaceholderApi.get<User[]>("/users")
      return data.map((user) => ({
        ...user,
        unreadCount: Math.floor(Math.random() * 100)
      }))
    }
  })
}
