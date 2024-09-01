'use client'
import { useEffect, useRef, useState } from 'react';

interface ChatProps {
    socket: SocketIOClient.Socket | null
}

interface Message {
    author: string;
    text: string;
}

export default function Chat({socket}: ChatProps) {
	const messageRef = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (!socket) return
				
        const handleReceiveMessage = (data: Message) => {
					setMessages((prevMessages) => [...prevMessages, data])
				}

				socket.on('receive_message', handleReceiveMessage)

				return () => {
					socket.off('receive_message', handleReceiveMessage)
				}
        
    }, [socket])

		const clearInput = () => {
			if (messageRef.current) {
				messageRef.current.value = ''
			}
		}

    const handleSubmit = () => {
			if (messageRef.current) {
				const message = messageRef.current.value.trim()
				if (message) {
					if (socket) {
						socket.emit('message', message)
						clearInput()
					}
				}
			}
    };

    return (
		<div className="p-4">
				<h1 className="text-xl font-bold mb-4">Chat Red Star</h1>
				<div className="bg-slate-950 min-h-[320px] max-w-[520px] p-4 rounded-lg">
						<div className="bg-slate-800 p-2 max-w-[520px] h-full overflow-y-auto flex flex-col-reverse rounded-xl">
								{messages.map((msg, index) => (
										<div key={index} className="p-2 bg-slate-700 rounded mb-2">
												<strong>{msg.author}:</strong> {msg.text}
										</div>
								))}
						</div>
						<div className="bg-slate-800 p-2 max-w-[520px] flex justify-between items-end rounded-xl mt-4">
								<input
										className="bg-transparent text-white w-full p-2"
										type="text"
										placeholder="Type your message"
										ref={messageRef}
								/>
								<button
										className="bg-teal-600  rounded-lg px-2 py-1 ml-2"
										type="button"
										onClick={handleSubmit}
								>
										Send
								</button>
						</div>
				</div>
		</div>
    );
}