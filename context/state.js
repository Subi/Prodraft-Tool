import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import io from "socket.io-client";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase/firebaseConfig";
import {useRouter} from "next/router";


export const DraftContext = createContext({})



function DraftProvider({children , draftData}) {
    const router = useRouter()
    // const [state , dispatch] = useReducer(
    //     reducer,
    //     {roomId: "" , }
    //     {roomId: router.query.roomId , teamId: router.query.teamId},
    //     createInitialState)

    // useEffect(() => {
    //     const {roomId , teamId} = router.query
    //     if(!router.isReady) return
    //
    //     const fetchRoomData = async () => {
    //         let room = await getRoomData(roomId , teamId)
    //         console.log(room)
    //     }
    //     fetchRoomData()
    //
    // }, [router])




    // const [draft , setDraft] = useState(null)
    // const [state , dispatch]  = useReducer(reducer , draftData)
    // const [socket , setSocket] = useState(null)

    // console.log(state)

    //
    // useEffect(() => socketInitializer , [])
    //
    //
    // const socketInitializer = async () => {
    //     await fetch('/api/socket')
    //     const newSocket = io()
    //     setSocket(newSocket)
    // }
    //
    //
    //
    // const updateDraft = draft => {
    //     setDraft(draft)
    // }
    //
    // const contextProps = {
    //     draft,
    //     updateDraft
    // }

    return (
        <DraftContext.Provider value={""}>
            {children}
        </DraftContext.Provider>
    )
}

const reducer = () => {

}




const createInitialState = ({roomId , teamId}) => {

    const room = getRoomData(roomId).then(data => {
        console.log(data)
        return data
    }).catch((e) => {
        console.log(e)
    })


    const getCurrentTeam = () => {
        if(teamId === room.blueTeam.id) {
            return "blueTeam"
        } else {
            return "redTeam"
        }
    }

        const draftData = {
        roomId: room.id,
        currentTurn: 0,
        currentTeam: getCurrentTeam(),
        timeLeft: 30,
        blueTeam: {
            id: room.blueTeam.id,
            name: room.blueTeam.name,
            currentAction: "INITIALIZING",
            isReady: false,
            isTurn: false,
            bans: []
        },
        redTeam: {
            id: room.redTeam.id,
            name: room.redTeam.name,
            currentAction: "INITIALIZING",
            isReady: false,
            isTurn: false,
            bans: []
        },
    }

    return draftData
}


const getRoomData = async (roomId) => {
    const response = await getDoc(doc(database, "rooms", roomId)).then((snap) => {
        if (!snap.exists()) {
            console.log("Can't find room")
        }
        return snap.data()
    }).catch((e) => {
        console.log(e)
    })
    return response
}






export default DraftProvider