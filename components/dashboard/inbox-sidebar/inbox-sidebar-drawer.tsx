"use client"

import { useDashboardModal } from "@/stores/use-dashboard-modal"
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer"
import { InboxSidebar } from "@/components/dashboard/inbox-sidebar"

export function InboxSidebarDrawer() {
  const isOpen = useDashboardModal(
    (state) => state.isOpen && state.modalType === "inbox-sidebar"
  )
  const onClose = useDashboardModal((state) => state.onClose)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-full">
        <DrawerTitle className="sr-only">Inbox</DrawerTitle>
        <InboxSidebar className="rounded-l-0 h-full w-full max-w-full overflow-y-auto border-r-0" />
      </DrawerContent>
    </Drawer>
  )
}
