import { Server } from 'socket.io'



const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io


        io.on('connection' , socket => {
            socket.on('sendUpdate', msg => {
                console.log(msg , socket)
            })


            socket.on('createDraft' , msg => {
                socket.emit('setDraftSettings' , createDraft(msg))
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


const generateRoomId = () => {
    return Math.random().toString(21).slice(5)
}

const generateTeamId = () => {
    return Math.random().toString(21).slice(8)
}

const createDraft = (msg) => {
    return {
        roomId: generateRoomId(),
        blueTeamId: generateTeamId(),
        redTeamId: generateTeamId(),
        blueTeamName: msg.blueTeamName,
        redTeamName: msg.redTeamName,
    }
}

export default SocketHandler

