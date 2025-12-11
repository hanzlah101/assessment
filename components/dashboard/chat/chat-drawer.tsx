"use client"

import { Chat } from "@/components/dashboard/chat"
import { useDashboardModal } from "@/stores/use-dashboard-modal"
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"

export function ChatDrawer() {
  const isOpen = useDashboardModal(
    (state) => state.isOpen && state.modalType === "chat"
  )
  const onClose = useDashboardModal((state) => state.onClose)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-full">
        <DrawerTitle className="sr-only">Chat</DrawerTitle>
        <Chat className="mx-0 rounded-none" />
      </DrawerContent>
    </Drawer>
  )
}
