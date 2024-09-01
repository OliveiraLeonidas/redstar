'use client'
import { useState } from "react"
import io from 'socket.io-client'

interface JoinProps {
  setChatVisibility: (visible: boolean) => void
  setSocket: (socket: SocketIOClient.Socket | null) => void
}

export default function Join({setChatVisibility, setSocket}: JoinProps) {

  const [username, setUsername] = useState<string>('')
  

  const handleSubmit = () => {
    if (!username.trim() || username == '') return 
    console.log(username)
    const socket = io.connect('http://localhost:5232')
    socket.emit('set_username', username)
    setSocket(socket)
    console.log('socket client: ', socket)
    setChatVisibility(true)
  }

  return (
      <div>
          <h1>Join chat</h1>
          <input className="text-black px-2 py-1" onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="username"/>
          <button className="bg-cyan-300 p-1 ml-2 rounded-sm" onClick={() => handleSubmit()}>join</button>
      </div>
  )
}