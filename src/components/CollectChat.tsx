"use client";
import Script from "next/script";

type CollectChatProps = {
  botId?: string; // NEXT_PUBLIC_COLLECTCHAT_ID if not provided
};

export function CollectChat({ botId }: CollectChatProps) {
  const id = botId || process.env.NEXT_PUBLIC_COLLECTCHAT_ID;
  if (!id) return null;
  return (
    <Script
      id="collectchat"
      src={`https://collectcdn.com/launcher.js`}
      data-id={id}
      strategy="afterInteractive"
    />
  );
}


