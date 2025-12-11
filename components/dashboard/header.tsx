import { Button } from "@/components/ui/button"
import { InboxIcon } from "@/components/icons/inbox"
import { UserGroupIcon } from "@/components/icons/user-group"
import { AIIcon } from "@/components/icons/ai"
import { CampaignIcon } from "@/components/icons/campaign"
import { WorkflowIcon } from "@/components/icons/workflow"
import { SettingsIcon } from "@/components/icons/settings"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function DashboardHeader() {
  return (
    <header className="flex w-full items-center justify-between rounded-lg bg-background px-[11.23px] py-[10.15px]">
      <div className="flex items-center gap-3">
        <h1 className="mr-3 font-poppins text-[13px] font-bold text-primary">
          BOXpad
        </h1>
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

      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <SettingsIcon className="size-[14px] text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Settings</TooltipContent>
        </Tooltip>

        <div className="flex items-center gap-1 text-[9.82px]">
          <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FE3265] font-sf-compact font-semibold text-white">
            <span className="font-inter font-semibold">M</span>
          </div>
          <span className="font-inter font-semibold">Michael Johnson</span>
        </div>
      </div>
    </header>
  )
}
