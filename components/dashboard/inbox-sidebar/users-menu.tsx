"use client"

import { SidebarItem, SidebarItemSkeleton } from "./sidebar-item"
import { ChevronDownIcon } from "lucide-react"
import { UserRoundedFilledIcon } from "@/components/icons/user-rounded"
import { useUsersQuery } from "@/queries/use-users-query"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

export function UsersMenu() {
  const { data, isLoading } = useUsersQuery()

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-2 py-2 text-[10px]">
        Users
        <ChevronDownIcon className="ml-auto size-2.5 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-1">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SidebarItemSkeleton key={index} />
            ))
          : data?.map((user) => (
              <SidebarItem key={user.id} unreadCount={user.unreadCount}>
                <UserRoundedFilledIcon />
                <span className="truncate">{user.name}</span>
              </SidebarItem>
            ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
