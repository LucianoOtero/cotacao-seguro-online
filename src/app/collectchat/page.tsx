"use client";
import { CollectChat } from "@/components/CollectChat";

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <p className="mb-6">O chat será carregado automaticamente.</p>
      <CollectChat />
    </main>
  );
}


