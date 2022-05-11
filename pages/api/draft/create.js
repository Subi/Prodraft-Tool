



export default function handler(req, res) {
    if(req.method !== "POST") return
    const {r , b} = req.body
    const room = generateRoom(r , b)
    return res.status(200).json(room)
}


const generateRoom = (red , blue) => {
    const room = {
        id: Math.random().toString(21).slice(5),
        blueTeam: {
            id: Math.random().toString(21).slice(8),
            name: red,
        },
        redTeam:{
            id:  Math.random().toString(21).slice(8),
            name: blue,
        }
    }
    return room
}