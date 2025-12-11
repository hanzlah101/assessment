import { TagIcon } from "@/components/icons/tag"
import { CollapsibleSection } from "./collapsible-section"
import { PlusIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

type ChatContactLabelsProps = {
  labels: string[]
}

export function ChatContactLabels({ labels }: ChatContactLabelsProps) {
  return (
    <CollapsibleSection title="Contact Labels">
      <div className="flex flex-wrap items-center gap-2">
        {labels.map((label) => (
          <div
            key={label}
            className="flex items-center gap-1 rounded-full border-[1.5px] border-primary bg-primary/10 px-1.5 py-0.5 font-semibold text-primary"
          >
            <TagIcon className="size-2.5" />
            <span className="text-[9px]">{label}</span>
          </div>
        ))}

        <div className="flex aspect-square size-[20.5px] items-center justify-center rounded-full border-[1.5px] border-primary bg-primary/10 text-primary">
          <PlusIcon className="size-3" />
        </div>
      </div>
    </CollapsibleSection>
  )
}

ChatContactLabels.Skeleton = function ChatContactLabelsSkeleton() {
  return (
    <CollapsibleSection.Skeleton className="flex flex-wrap items-center gap-2">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton
          key={index}
          className="flex h-[20.5px] items-center gap-1 rounded-full border-[1.5px] bg-muted/50 px-1.5 py-0.5"
        >
          <TagIcon className="size-2.5 text-muted-foreground/50" />
          <Skeleton className="h-2.5 w-12 rounded bg-foreground/10" />
        </Skeleton>
      ))}

      <Skeleton className="flex aspect-square size-[20.5px] items-center justify-center rounded-full border-[1.5px] bg-muted/50">
        <PlusIcon className="size-3 text-muted-foreground/50" />
      </Skeleton>
    </CollapsibleSection.Skeleton>
  )
}
