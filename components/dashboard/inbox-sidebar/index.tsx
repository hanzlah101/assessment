import { TeamsMenu } from "./teams-menu"
import { UsersMenu } from "./users-menu"
import { SidebarItem } from "./sidebar-item"
import { UserFilledIcon } from "@/components/icons/user"
import { UserGroupFilledIcon } from "@/components/icons/user-group"
import { UserRoundedIcon } from "@/components/icons/user-rounded"
import { cn } from "@/lib/utils"

type InboxSidebarProps = {
  className?: string
}

export function InboxSidebar({ className }: InboxSidebarProps) {
  return (
    <aside
      className={cn(
        "size-full max-w-42 flex-1 shrink-0 overflow-x-hidden overflow-y-auto rounded-l-lg border-r bg-background px-3 pt-3.5 pb-3",
        className
      )}
    >
      <h1 className="px-2 font-sf-compact text-xs font-bold">Inbox</h1>

      <div className="mt-3 flex flex-col gap-1">
        <SidebarItem>
          <UserFilledIcon />
          My Inbox
        </SidebarItem>

        <SidebarItem unreadCount={18}>
          <UserGroupFilledIcon />
          All
        </SidebarItem>

        <SidebarItem unreadCount={5}>
          <UserRoundedIcon />
          Unassigned
        </SidebarItem>
      </div>

      <TeamsMenu />
      <UsersMenu />
    </aside>
  )
}
