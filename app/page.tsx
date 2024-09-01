'use client'
import Join from "./components/join/join";
import Chat from "./chat/page";
import { useState } from "react";

export default function Home() {
  const [ chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {
          chatVisibility ? <Chat socket={socket}/> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
        }

    </main>
  );
}
