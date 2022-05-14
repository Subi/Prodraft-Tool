import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../../firebase/firebaseConfig";
import Draft from "../../../components/draft/Draft";


function TeamView() {
    const [champions , setChampions] = useState([])
    const [roomId , setRoomId] = useState("")
    const [teamId , setTeamId] = useState("")
    const [data , setData] = useState(null)

    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) return
        setRoomId(router.query.roomId.toString())
        setTeamId(router.query.teamId.toString())
    } , [router])


    useEffect(() => {
        if(!teamId || !roomId) return

        console.log(teamId , roomId)
    }, [roomId , teamId])



    useEffect(() => {
        const fetchChampionData = async () => {
            let championsArr = []
            const response = await fetch("https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json", {method:"GET"})
            let {data} =  await response.json()

            for(let champion in data) {
                championsArr.push({
                    name: data[champion].name,
                    key: data[champion].key,
                    image: data[champion].image
                })
            }
            setChampions(championsArr)
        }
        fetchChampionData()
    } , [])


    useEffect(() => {
        if(!roomId) return
        const fetchRoomData = async  () => {
            const data = await getRoom(roomId)
            setData(data)
        }

        fetchRoomData()
    } , [roomId])


    const getRoom = async roomId  => {
        const response = await getDoc(doc(database , "rooms" , roomId)).then((snap) => {
            if(!snap.exists()) {
                console.log("Can't find")
            }
            return snap.data()
        })
        return response
    }

    console.log(teamId)
    return (
        <>
            {!data ? "loading" : <Draft data={data} teamId={teamId}/> }
        </>
    )
}


export default TeamView