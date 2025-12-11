"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { InboxIcon } from "@/components/icons/inbox"
import { UserGroupIcon } from "@/components/icons/user-group"
import { AIIcon } from "@/components/icons/ai"
import { CampaignIcon } from "@/components/icons/campaign"
import { WorkflowIcon } from "@/components/icons/workflow"
import { SettingsIcon } from "@/components/icons/settings"
import { MenuIcon, XIcon } from "lucide-react"
import { useCurrentUserQuery } from "@/queries/use-current-user-query"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="relative flex w-full items-center justify-between rounded-lg bg-background px-[11.23px] py-[10.15px]">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? (
            <XIcon className="size-[14px]" />
          ) : (
            <MenuIcon className="size-[14px]" />
          )}
        </Button>

        <h1 className="font-poppins text-[13px] font-bold text-primary">
          BOXpad
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button size="sm" variant="outline">
            <InboxIcon className="size-[14px]" />
            Inbox
          </Button>

          <Button size="sm" variant="ghost">
            <UserGroupIcon className="size-[14px] text-muted-foreground" />
            Contacts
          </Button>

          <Button size="sm" variant="ghost">
            <AIIcon className="size-[14px] text-muted-foreground" />
            AI Employees
          </Button>

          <Button size="sm" variant="ghost">
            <WorkflowIcon className="size-[14px] text-muted-foreground" />
            Workflows
          </Button>

          <Button size="sm" variant="ghost">
            <CampaignIcon className="size-[14px] text-muted-foreground" />
            Campaigns
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-full left-0 z-50 mt-2 w-full rounded-lg border border-border/50 p-3 shadow-lg transition-all duration-200",
          "bg-background/60 backdrop-blur",
          isMenuOpen
            ? "pointer-events-auto opacity-100 lg:hidden"
            : "pointer-events-none opacity-0 lg:hidden"
        )}
      >
        <div className="flex flex-col gap-1">
          <Button
            size="sm"
            variant="outline"
            className="w-full justify-start gap-2"
          >
            <InboxIcon className="size-[14px]" />
            Inbox
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <UserGroupIcon className="size-[14px] text-muted-foreground" />
            Contacts
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <AIIcon className="size-[14px] text-muted-foreground" />
            AI Employees
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <WorkflowIcon className="size-[14px] text-muted-foreground" />
            Workflows
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            <CampaignIcon className="size-[14px] text-muted-foreground" />
            Campaigns
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <SettingsIcon className="size-[14px] text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Settings</TooltipContent>
        </Tooltip>

        <User />
      </div>
    </header>
  )
}

function User() {
  const { data: user, isLoading } = useCurrentUserQuery()

  return (
    <div className="flex items-center gap-1 text-[9.82px]">
      {isLoading ? (
        <Skeleton className="size-5 shrink-0 rounded-full" />
      ) : (
        <div
          className="flex size-5 shrink-0 items-center justify-center rounded-full font-sf-compact font-semibold text-white"
          style={{ backgroundColor: "#FE3265" }}
        >
          {user?.name.charAt(0)}
        </div>
      )}

      {isLoading ? (
        <Skeleton className="h-3.5 w-18.75 rounded" />
      ) : (
        <span className="font-inter font-semibold">{user?.name}</span>
      )}
    </div>
  )
}
