import { Server } from 'socket.io'



const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io


        io.on('connection' , socket => {
            socket.on('joinroom' , roomName => {
                const room = io.sockets.adapter.rooms.get(roomName)
                if(!room || room.size < 2) {// Check if the room exist or if the remove has less than 2 players
                    console.log(`${socket.id} has successfully connected to ${roomName}`)
                    socket.join(roomName)
                } else {
                    console.log("Room has exceeded the max amount of players") // Don't allow more than 2 players connected
                }
            })
            socket.on("READY_UP" , team => {
                socket.broadcast.emit("READY_UP" , team )
            })

            socket.on("NEXT_TURN" , () => {
                socket.broadcast.emit("NEXT_TURN")
            })

            socket.on("previewChampion" , data => {
                socket.broadcast.emit("previewChampion", data)
            })
        })


        // io.of("/").adapter.on("create-room", (room) => {
        //     console.log(`room ${room} was created`);
        // });
        //
        // io.of("/").adapter.on("join-room", (room, id , socket) => {
        //     console.log(`socket ${id} has joined room ${room}`);
        // });
    }

    res.end()
}

// const refuseNewConnection()


export default SocketHandler

