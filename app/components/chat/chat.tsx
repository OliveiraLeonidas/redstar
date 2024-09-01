'use client'

import { useEffect, useRef, useState } from "react"

interface ChatProps {
    socket: SocketIOClient.Socket | null
}

interface Message {
    author: string;
    text: string
}

export default function Chat({socket}: ChatProps) {
    console.log(socket)
    const messageRef = useRef<HTMLInputElement>(null)
    const [messageList, setMessageList] = useState<Message[]>([])

    useEffect(() => {
        if (!socket) return

        const handleReceiveMessage = (data: Message) => {
            setMessageList((current) => [...current, data])
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
    }

    return (
        <div>
            <h1>Chat</h1>
            <input 
                ref={messageRef}
                type="text" 
                className="text-black px-2 py-1" 
                placeholder="message"
            />
            <button 
                className="bg-cyan-300" 
                type="button" 
                onClick={handleSubmit}>Send</button>

            <div>
                {
                    messageList.map((message, index) => (
                        <p key={index}>{message.author}: {message.text}</p>
                    ))
                }
            </div>
        </div>
    )
}
