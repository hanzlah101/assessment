"use client"

import { useDashboardModal } from "@/stores/use-dashboard-modal"
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { ChatDetails } from "@/components/dashboard/chat-details"

export function ChatDetailsDrawer() {
  const isOpen = useDashboardModal(
    (state) => state.isOpen && state.modalType === "chat-details"
  )
  const onClose = useDashboardModal((state) => state.onClose)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-full">
        <DrawerTitle className="sr-only">Details</DrawerTitle>
        <ChatDetails className="w-full max-w-full" />
      </DrawerContent>
    </Drawer>
  )
}
