"use client"

import { useMemo, useEffect, useRef } from "react"
import { useMessagesQuery } from "@/queries/use-messages-query"
import { MessageBubble } from "./message-bubble"
import { format } from "date-fns"
import { Message } from "@/types/db"
import { Skeleton } from "@/components/ui/skeleton"

type MessagesByDate = {
  date: string
  messages: Message[]
}

export function ChatMessages() {
  const { data, isLoading } = useMessagesQuery()
  const scrollRef = useRef<HTMLDivElement>(null)

  const messagesByDate = useMemo<MessagesByDate[]>(() => {
    if (!data) return []

    return data.reduce((acc, message) => {
      const dateKey = format(message.timestamp, "yyyy-MM-dd")
      const existingGroup = acc.find((group) => group.date === dateKey)

      if (existingGroup) {
        existingGroup.messages.push(message)
      } else {
        acc.push({
          date: dateKey,
          messages: [message]
        })
      }

      return acc
    }, [] as MessagesByDate[])
  }, [data])

  useEffect(() => {
    if (scrollRef.current && !isLoading) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messagesByDate, isLoading])

  return (
    <div
      ref={scrollRef}
      className="flex h-full flex-1 flex-col gap-4 overflow-y-auto p-4"
    >
      {isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="mx-auto my-3 flex h-[25.5px] w-full max-w-28 items-center justify-center rounded-sm bg-accent">
            <Skeleton className="h-2.5 w-full max-w-20 bg-foreground/10" />
          </Skeleton>

          {Array.from({ length: 5 }).map((_, index) => (
            <MessageBubble.Skeleton key={index} index={index} />
          ))}
        </div>
      ) : (
        messagesByDate.map((group) => (
          <div key={group.date} className="flex flex-col gap-4">
            <div className="mx-auto my-3 flex w-fit items-center justify-center rounded-sm bg-accent px-2 py-1.5 text-[9px] font-semibold text-accent-foreground">
              {format(new Date(group.date), "EEEE, MMMM d, yyyy")}
            </div>

            {group.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        ))
      )}
    </div>
  )
}
