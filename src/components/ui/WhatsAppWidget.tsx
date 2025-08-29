"use client";

import { useMemo } from "react";

type WhatsAppWidgetProps = {
  phone?: string; // E.164 without leading +, e.g. 2348022596060
  defaultMessage?: string;
};

export default function WhatsAppWidget({
  phone = "2348022596060",
  defaultMessage = "Hello, I would like to chat with Balosh.",
}: WhatsAppWidgetProps) {
  const chatUrl = useMemo(() => {
    const params = new URLSearchParams({ text: defaultMessage });
    return `https://wa.me/${phone}?${params.toString()}`;
  }, [phone, defaultMessage]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="hidden sm:inline-block rounded-xl border-1 border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800 ">
          Chat with us
        </span>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition-transform group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.55 0 .23 5.32.23 11.84a11.67 11.67 0 0 0 1.57 5.92L0 24l6.42-1.67a11.83 11.83 0 0 0 5.63 1.44h.01c6.51 0 11.83-5.32 11.83-11.84 0-3.16-1.23-6.13-3.37-8.49ZM12.06 21.3h-.01a9.45 9.45 0 0 1-4.82-1.33l-.35-.2-3.81.99 1.02-3.71-.22-.38a9.45 9.45 0 0 1-1.43-4.99c0-5.23 4.25-9.48 9.49-9.48 2.53 0 4.9.98 6.68 2.76a9.37 9.37 0 0 1 2.8 6.73c0 5.23-4.25 9.48-9.48 9.48Zm5.2-7.11c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.59.68.22 1.31.19 1.81.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
