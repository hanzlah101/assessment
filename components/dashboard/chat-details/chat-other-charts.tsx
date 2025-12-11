import { InstagramIcon } from "@/components/icons/instagram"
import { CollapsibleSection } from "./collapsible-section"
import { Skeleton } from "@/components/ui/skeleton"
import { ChatDetailsData } from "@/queries/use-chat-details-query"

type ChatOtherChartsProps = {
  charts: ChatDetailsData["otherCharts"]
}

const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  instagram: InstagramIcon,
  twitter: InstagramIcon,
  facebook: InstagramIcon,
  linkedin: InstagramIcon,
  youtube: InstagramIcon
}

export function ChatOtherCharts({ charts }: ChatOtherChartsProps) {
  const chart = charts[0]
  if (!chart) return null

  const Icon = iconMap[chart.icon] || InstagramIcon

  return (
    <CollapsibleSection
      title="Other Charts"
      className="flex items-center justify-between"
    >
      <div className="flex items-center gap-1">
        <Icon className="size-4" />
        <div>
          <p className="text-[10px]">{chart.name}</p>
          <p className="text-[9px] text-muted-foreground">
            {chart.description}
          </p>
        </div>
      </div>

      <p className="text-[8px] text-muted-foreground">{chart.date}</p>
    </CollapsibleSection>
  )
}

ChatOtherCharts.Skeleton = function ChatOtherChartsSkeleton() {
  return (
    <CollapsibleSection.Skeleton className="flex min-h-[28.5px] items-center justify-between">
      <div className="flex items-center gap-1">
        <Skeleton className="size-4 shrink-0 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-2 w-10" />
          <Skeleton className="h-1.5 w-14" />
        </div>
      </div>

      <Skeleton className="h-2.5 w-6" />
    </CollapsibleSection.Skeleton>
  )
}
