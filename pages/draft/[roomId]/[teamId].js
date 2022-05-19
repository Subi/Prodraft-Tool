import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../../firebase/firebaseConfig";
import Draft from "../../../components/draft/Draft";
import io from "socket.io-client";


function TeamView(props) {
    const [draft , setDraft] = useState(props.draftData)
    const [champions , setChampions] = useState(props.championsArr)
    const [socket , setSocket] = useState(null)


    useEffect(() => socketInitializer , [])

    useEffect(() => {
        if(!socket) return
        socket.on("connect", () => {
            socket.emit("joinroom" , draft.id)
        })

        socket.on("ready up" , data => {21
            setDraft({...draft , [data]: {...draft[data] , isReady:true}})
            // console.log(draft)
        })
    } , [socket , draft])


    useEffect(() => {
        if(draft.blueTeam.isReady && draft.redTeam.isReady) {
            console.log("Start timer for both teams")
        }
        // setDraft({...draft , blueTeam: {...draft.blueTeam , isReady: true}})
    } , [draft])


    const socketInitializer = async () => {
        await fetch('/api/socket')
        const newSocket = io()
        setSocket(newSocket)
    }


    return (
        <>
            {!draft ? "loading" : <Draft champions={champions} data={draft} setDraft={setDraft} socket={socket} /> }
        </>
    )
}


export const getStaticProps  = async (context)  => {
    let teamId = context.params.teamId
    let championsArr = []


    const response = await getDoc(doc(database, "rooms", context.params.roomId)).then((snap) => {
        if (!snap.exists()) {
            console.log("Can't find")
        }
        return snap.data()
    })


    const getCurrentTeam = () => {
        for(let prop in response) {
            if(teamId == response[prop].id)
                return prop
        }
    }


    const draftData = {
        id: response.id,
        currentTurn: 0,
        currentTeam: getCurrentTeam(),
        blueTeam: {
            id: response.blueTeam.id,
            name: response.blueTeam.name,
            isReady: false
        },
        redTeam: {
            id: response.redTeam.id,
            name: response.redTeam.name,
            isReady: false
        },
    }


    const championResponse = await fetch("https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json", {method: "GET"})
    let {data} = await championResponse.json()
    for (let champion in data) {
        championsArr.push({
            name: data[champion].name,
            key: data[champion].key,
            image: data[champion].image
        })
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