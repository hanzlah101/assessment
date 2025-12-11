import { create } from "zustand"

type DashboardModalType = "inbox-sidebar" | "chat-details" | "chat"

type DashboardModalStore = {
  modalType: DashboardModalType | null
  isOpen: boolean
  onOpen: (type: DashboardModalType) => void
  onClose: () => void
}

export const useDashboardModal = create<DashboardModalStore>((set) => ({
  modalType: null,
  isOpen: false,
  onOpen: (modalType) => set({ modalType, isOpen: true }),
  onClose: () => set({ modalType: null, isOpen: false })
}))
