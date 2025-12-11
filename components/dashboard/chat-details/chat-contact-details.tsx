import { Button } from "@/components/ui/button"
import { CollapsibleSection } from "./collapsible-section"
import { Skeleton } from "@/components/ui/skeleton"

type ChatContactDetailsProps = {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export function ChatContactDetails({
  firstName,
  lastName,
  phone,
  email
}: ChatContactDetailsProps) {
  return (
    <CollapsibleSection title="Contact Details" className="space-y-3">
      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">First Name</p>
        <p className="col-span-2 font-semibold">{firstName}</p>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">Last Name</p>
        <p className="col-span-2 font-semibold">{lastName}</p>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">Phone number</p>
        <p className="col-span-2 font-semibold">{phone}</p>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <p className="col-span-1 text-muted-foreground">Email</p>
        <p className="col-span-2 font-semibold">{email}</p>
      </div>

      <Button
        size="fit"
        variant="muted-text-reverse"
        className="justify-start text-[10px] font-semibold"
      >
        See All
      </Button>
    </CollapsibleSection>
  )
}

ChatContactDetails.Skeleton = function ChatContactDetailsSkeleton() {
  return (
    <CollapsibleSection.Skeleton className="space-y-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="grid min-h-3.75 grid-cols-3 gap-x-8">
          <Skeleton className="col-span-1 h-2.5 w-full rounded" />
          <Skeleton className="col-span-2 h-2.5 w-1/2 rounded" />
        </div>
      ))}

      <Button
        size="fit"
        variant="muted-text-reverse"
        className="justify-start text-[10px] font-semibold"
      >
        See All
      </Button>
    </CollapsibleSection.Skeleton>
  )
}
