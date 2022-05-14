import {useEffect, useState} from "react";
import {database} from "../../../firebase/firebaseConfig";
import {getDoc , doc} from 'firebase/firestore'
import {useRouter} from "next/router";
import Draft from "../../../components/draft/Draft";

function SpectatorView()  {
    const [roomId , setRoomId] = useState("")
    const [data , setData] = useState(null)

    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) return
        setRoomId(router.query.roomId.toString())
    } , [router])

    useEffect(() => {
        if(!roomId) return
        const fetchRoomData = async  () => {
            const data = await getRoom(roomId)
            setData(data)
        }

        fetchRoomData()
    } , [roomId])

    useEffect(() => {
        if(!data) return
        console.log(data , "this is the data")
    } , [data])


    const getRoom = async roomId  => {
        const response = await getDoc(doc(database , "rooms" , roomId)).then((snap) => {
            if(!snap.exists()) {
                console.log("Can't find")
            }
            return snap.data()
        })
        return response
    }


    return (
        <>
            {!data ? "loading" : <Draft data={data}/> }
        </>

    )
}




export default SpectatorView