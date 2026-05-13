import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Streamdown } from "streamdown";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type AIChatBoxProps = {
  messages: Message[];
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  height?: string;
  emptyStateMessage?: string;
  suggestedPrompts?: string[];
  className?: string;
};

export function AIChatBox({
  messages,
  onSendMessage,
  isLoading = false,
  placeholder = "Send a message...",
  height = "420px",
  emptyStateMessage = "Start a conversation",
  suggestedPrompts = [],
  className,
}: AIChatBoxProps) {
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const visibleMessages = messages.filter(message => message.role !== "system");

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleMessages.length, isLoading]);

  const send = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isLoading) return;
    onSendMessage(trimmed);
    setDraft("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    send(draft);
  };

  return (
    <div
      className={cn(
        "flex min-h-0 flex-col overflow-hidden rounded-lg border bg-background",
        className
      )}
      style={{ height }}
    >
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4"
      >
        {visibleMessages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">{emptyStateMessage}</p>
            {suggestedPrompts.length > 0 && (
              <div className="flex max-w-xl flex-wrap justify-center gap-2">
                {suggestedPrompts.map(prompt => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => send(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ) : (
          visibleMessages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[82%] rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                <Streamdown
                  className={cn(
                    "prose prose-sm max-w-none dark:prose-invert",
                    message.role === "user" && "prose-invert"
                  )}
                >
                  {message.content}
                </Streamdown>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            <span>Generating response...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 border-t p-3">
        <Textarea
          value={draft}
          onChange={event => setDraft(event.target.value)}
          onKeyDown={event => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              send(draft);
            }
          }}
          placeholder={placeholder}
          className="min-h-10 resize-none"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!draft.trim() || isLoading}
          aria-label="Send message"
        >
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </Button>
      </form>
    </div>
  );
}
