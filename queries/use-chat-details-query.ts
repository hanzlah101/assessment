import { sleep } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import { useChatStore } from "@/stores/use-chat-store"

export type ChatDetailsData = {
  assignee: string
  team: string
  firstName: string
  lastName: string
  phone: string
  email: string
  labels: string[]
  notes: string[]
  otherCharts: {
    icon: string
    name: string
    description: string
    date: string
  }[]
}

export function useChatDetailsQuery() {
  const selectedChatId = useChatStore((state) => state.selectedChatId)

  return useQuery<ChatDetailsData>({
    queryKey: ["chat-details", selectedChatId],
    queryFn: async () => {
      await sleep(1)

      return {
        assignee: "Michael Johnson",
        team: "Sales Team",
        firstName: "Olivia",
        lastName: "Mckinsey",
        phone: "+1 (312) 555-0134",
        email: "olivia.Mckinsey@gmail.com",
        labels: ["Closed Won", "Chicago"],
        notes: ["Strong potential for future upgrades"],
        otherCharts: [
          {
            icon: "instagram",
            name: "Fit4LIfe",
            description: "On my way!",
            date: "08/08/25"
          }
        ]
      }
    },
    enabled: !!selectedChatId
  })
}
