import io from "socket.io-client";
import React from 'react'

const socket = io('http://localhost:9000', {
    cors: { origin: '*' }
})

socket.on('connect', () => {
    console.log("socket connect")
})
socket.on('disconnect', () => {
    console.log("socket disconnect")
})

const socketContext = React.createContext()

export {socketContext, socket}