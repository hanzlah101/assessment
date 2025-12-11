import { ChevronDownIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"

type CollapsibleSectionProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
  className?: string
}

export function CollapsibleSection({
  title,
  defaultOpen = true,
  children,
  className
}: CollapsibleSectionProps) {
  return (
    <Collapsible defaultOpen={defaultOpen} className="border-b p-4 text-[10px]">
      <CollapsibleTrigger className="flex w-full items-center justify-between pb-2.5">
        <p className="font-medium">{title}</p>
        <ChevronDownIcon className="size-2.5 transition-transform group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className={className}>{children}</CollapsibleContent>
    </Collapsible>
  )
}

CollapsibleSection.Skeleton = function CollapsibleSectionSkeleton({
  children,
  className
}: Pick<CollapsibleSectionProps, "children" | "className">) {
  return (
    <div className="border-b p-4 text-[10px]">
      <div className="flex min-h-6.25 w-full items-center justify-between pb-2.5">
        <Skeleton className="h-2.5 w-full max-w-16 rounded" />
        <ChevronDownIcon className="size-2.5" />
      </div>

      <div className={className}>{children}</div>
    </div>
  )
}
