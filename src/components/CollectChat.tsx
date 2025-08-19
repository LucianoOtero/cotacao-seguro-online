"use client";

import Script from "next/script";

type CollectChatProps = {
  botId?: string;
};

export function CollectChat({ botId = "6707f4b9e4b09e5e76a5c8ba" }: CollectChatProps) {
  return (
    <>
      <Script
        id="collect-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d) {
              w.CollectId = "${botId}";
              var h = d.head || d.getElementsByTagName("head")[0];
              var s = d.createElement("script");
              s.setAttribute("type", "text/javascript");
              s.setAttribute("src", "https://collectcdn.com/launcher.js");
              h.appendChild(s);
            })(window, document);
          `,
        }}
      />
    </>
  );
}