import { create } from "zustand"

type ChatStore = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedChatId: number
  setSelectedChatId: (chatId: number) => void
  selectedUserId: number
  setSelectedUserId: (userId: number) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedChatId: 1,
  setSelectedChatId: (chatId) => set({ selectedChatId: chatId }),
  selectedUserId: 1,
  setSelectedUserId: (userId) => set({ selectedUserId: userId })
}))
