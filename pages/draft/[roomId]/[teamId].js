import {useRouter} from "next/router";
import {useEffect, useReducer, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../../firebase/firebaseConfig";
import Draft from "../../../components/draft/Draft";
import io from "socket.io-client";



const reducer = (state , action) => {
    switch (action.type) {
        case "READY_UP":
            return {
                ...state,
                [action.payload]: {...state[action.payload] , currentAction: "WAITING",  isReady: true}
            }
        case "NEXT_TURN":
            return {
                ...state,
                currentTurn: state.currentTurn + 1
            }
        case "CHECK_TURN":
                return {
                    ...state,
                    [state.currentTeam]: {...state[state.currentTeam] , currentAction: state.currentTurn % 2 && state.currentTeam === "blueTeam" ? "BANNING" : "WAITING" }
                }
        case "UPDATE_PREVIEW_BAN":
            return {
                ...state,
                [state.currentTeam]: {...state[state.currentTeam] , bans:[]}
            }
        case "BAN":
            console.log(action.payload)
            return {
                ...state,
                [state.currentTeam]: {...state[state.currentTeam] , bans:[...state[state.currentTeam].bans , action.payload]}
            }
    }
}

function TeamView(props) {
    const [draft , dispatch] = useReducer(reducer , props.draftData)
    const [previewChampion , setPreviewChampion] = useState("")
    const [socket , setSocket] = useState(null)


    useEffect(() => socketInitializer , [])



    useEffect(() => {
        if(draft.blueTeam.isReady && draft.redTeam.isReady) {
            console.log("Ready")
            dispatch({type: "UPDATE_PREVIEW_BAN" , payload: previewChampion})
        }

    } , [previewChampion])

    useEffect(() => {
        if(!draft) return
        if(draft.blueTeam.isReady && draft.redTeam.isReady) {
            dispatch({type: "NEXT_TURN"})
            // socket.emit("NEXT_TURN")
        }
    },  [draft.blueTeam.isReady , draft.redTeam.isReady])


    useEffect(() => {
        if(draft.currentTurn === 0 ) return
        dispatch({type: "CHECK_TURN"})
        socket.emit("CHECK_TURN")
    } , [draft.currentTurn])

    useEffect(() => {
        if(!socket) return

        socket.on("connect" , () => {
            socket.emit("joinroom" , draft.id)
        })

        socket.on("disconnect" , () => {
            console.log(socket.rooms)
        })

        socket.on("NEXT_TURN", () => {
            dispatch({type: "NEXT_TURN"})
        })

        socket.on("READY_UP" , team => {
            dispatch({type: "READY_UP" , payload: team})
        })
    } , [socket])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        const newSocket = io()
        setSocket(newSocket)
    }


    // console.log(draft[draft.currentTeam].currentAction)
    // console.log(draft[draft.currentTeam].bans)
    // console.log(previewChampion)
    console.log(draft)

    return (
        <>
            {!draft ? "loading" : <Draft champions={props.championsArr} data={draft} dispatch={dispatch} socket={socket}  previewChampion={previewChampion} setPreviewChampion={setPreviewChampion} /> }
        </>
    )
}






const getCurrentTeam = (teamId , room) => {
    return (teamId === room.blueTeam.id ? "blueTeam" : "redTeam")
}


export const getStaticProps = async (context) => {
    const {roomId , teamId} = context.params
    const championsArr = []



    const room = await getDoc(doc(database , "rooms" , roomId)).then((snap) => {
        if(!snap.exists()) {
            console.log(`Room ${roomId} does not exist`)
        }
        return snap.data()
    })

    const championData = await fetch("https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json", {method: "GET"})
    let {data} = await championData.json()

    for (let champion in data) {
        championsArr.push({
            name: data[champion].name,
            key: data[champion].key,
            image: data[champion].image,
            isPicked: false
        })
    }

        const draftData = {
        id: room.id,
        currentTurn: 0,
        currentTeam: getCurrentTeam(teamId , room),
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

    return {
        props: {championsArr , draftData}
    }
}


export async function getStaticPaths(){
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}






export default TeamView