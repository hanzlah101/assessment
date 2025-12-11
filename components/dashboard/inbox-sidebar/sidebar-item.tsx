import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export function SidebarItem({
  className,
  children,
  isActive,
  unreadCount,
  ...props
}: React.ComponentProps<"button"> & {
  isActive?: boolean
  unreadCount?: number
}) {
  return (
    <button
      className={cn(
        "flex h-7 w-full items-center justify-start gap-2 rounded-md px-2 py-1.5 font-sf-compact text-[10px] transition-colors disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-3 [&>svg]:shrink-0",
        isActive ? "bg-accent" : "hover:bg-accent",
        className
      )}
      {...props}
    >
      {children}

      {unreadCount && <span className="ml-auto text-[8px]">{unreadCount}</span>}
    </button>
  )
}

export function SidebarItemSkeleton() {
  return (
    <SidebarItem disabled className="bg-accent">
      <Skeleton className="size-3 rounded-full bg-foreground/10" />
      <Skeleton className="h-2 w-full max-w-16 rounded bg-foreground/10" />
    </SidebarItem>
  )
}
