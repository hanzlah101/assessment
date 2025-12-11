import { SidebarItem } from "./sidebar-item"
import { ChevronDownIcon } from "lucide-react"
import { UserGroupRoundedIcon } from "@/components/icons/user-rounded"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

export function TeamsMenu() {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-2 py-2 text-[10px]">
        Teams
        <ChevronDownIcon className="ml-auto size-2.5 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarItem unreadCount={7}>
          <UserGroupRoundedIcon />
          Sales
        </SidebarItem>

        <SidebarItem unreadCount={16}>
          <UserGroupRoundedIcon />
          Customer Support
        </SidebarItem>
      </CollapsibleContent>
    </Collapsible>
  )
}
