import { sleep } from "@/lib/utils"
import { User } from "@/types/db"
import { useQuery } from "@tanstack/react-query"
import { jsonPlaceholderApi } from "@/lib/api"

export function useCurrentUserQuery() {
  return useQuery<User>({
    queryKey: ["current-user"],
    queryFn: async () => {
      await sleep(0.5)
      const { data } = await jsonPlaceholderApi.get<User>("/users/1")
      return data
    }
  })
}
