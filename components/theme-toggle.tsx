import { Button } from "@/components/ui/button"
import { MoonIcon } from "@/components/icons/moon"
import { useTheme } from "next-themes"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { SunIcon } from "./icons/sun"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon-sm"
          className="size-6"
          variant="secondary"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <MoonIcon className="size-3 dark:hidden" />
          <SunIcon className="hidden size-3 dark:block" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isDark ? "Light Mode" : "Dark Mode"}</TooltipContent>
    </Tooltip>
  )
}
