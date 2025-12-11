import { EmojiIcon } from "@/components/icons/emoji"
import { DocumentIcon } from "@/components/icons/document"
import { ImageIcon } from "@/components/icons/image"
import { ShareIcon } from "@/components/icons/share"
import { VideoIcon } from "@/components/icons/video"
import { Button } from "@/components/ui/button"
import { FlashIcon } from "@/components/icons/flash"
import { MicrophoneIcon } from "@/components/icons/microphone"

export function ChatForm() {
  return (
    <form className="m-3 flex flex-col gap-3 rounded-md border bg-background pb-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <textarea
        placeholder="Type something...."
        className="field-sizing-content max-h-50 min-h-15 w-full resize-none px-4 py-3 text-xs outline-none placeholder:text-muted-foreground"
      />

      <div className="flex items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-2.5">
          <Button title="Upload Image" size="fit" variant="muted-text-reverse">
            <ImageIcon />
          </Button>

          <Button title="Upload Video" size="fit" variant="muted-text-reverse">
            <VideoIcon />
          </Button>

          <Button
            title="Upload Document"
            size="fit"
            variant="muted-text-reverse"
          >
            <DocumentIcon />
          </Button>

          <Button title="Emoji" size="fit" variant="muted-text-reverse">
            <EmojiIcon />
          </Button>

          <Button title="Share" size="fit" variant="muted-text-reverse">
            <ShareIcon />
          </Button>
        </div>

        <div className="flex items-center gap-2.5">
          <Button title="Write with AI" size="fit" variant="muted-text-reverse">
            <FlashIcon />
          </Button>

          <Button title="Record Audio" size="fit" variant="muted-text-reverse">
            <MicrophoneIcon />
          </Button>
        </div>
      </div>
    </form>
  )
}
