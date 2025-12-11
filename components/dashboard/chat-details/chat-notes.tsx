import { Skeleton } from "@/components/ui/skeleton"
import { CollapsibleSection } from "./collapsible-section"

type ChatNotesProps = {
  notes: string[]
}

export function ChatNotes({ notes }: ChatNotesProps) {
  return (
    <CollapsibleSection title="Notes" className="space-y-1 text-black">
      <input
        placeholder="Add a note"
        className="h-6.75 w-full rounded-md bg-[#F5E096] px-2 outline-none placeholder:text-black/40"
      />
      {notes.map((note, index) => (
        <div key={index} className="w-full rounded-md bg-[#F5E096] px-2 py-1.5">
          {note}
        </div>
      ))}
    </CollapsibleSection>
  )
}

ChatNotes.Skeleton = function ChatNotesSkeleton() {
  return (
    <CollapsibleSection.Skeleton className="space-y-1">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="h-6.75 w-full rounded-md" />
      ))}
    </CollapsibleSection.Skeleton>
  )
}
