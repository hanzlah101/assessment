import { cn } from "@/lib/utils"

export function SidebarItem({
  className,
  isActive,
  ...props
}: React.ComponentProps<"button"> & { isActive?: boolean }) {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-start gap-2 rounded-md px-2 py-1.5 [&_svg:not([class*='size-'])]:size-3",
        isActive ? "bg-accent" : "hover:bg-accent",
        className
      )}
      {...props}
    />
  )
}
