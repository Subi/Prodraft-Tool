import classes from './Home.module.css'
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {app , database} from "../../firebase/firebaseConfig"
import {collection , addDoc , setDoc , doc} from 'firebase/firestore'
import TeamNameInput from "./TeamNameInput";
import TeamLinks from "./TeamLinks";
import SpectatorView from "../../pages/draft/[roomId]";
import {DraftContext} from "../../context/state";



function Home() {
    // const dbInstance =  collection(database , "rooms")
    const [blueTeamLink , setBlueTeamLink] = useState('')
    const [redTeamLink , setRedTeamLink] = useState('')
    const [spectatorLink , setSpectatorLink] = useState('')
    const [redTeamName , setRedTeamName] = useState('')
    const [blueTeamName , setBlueTeamName] = useState('')
    const [draft , setDraft] = useState(null)

    useEffect(() => {
        if(!draft) return
        setBlueTeamLink(`localhost:3000/draft/${draft.id}/${draft.blueTeam.id}`)
        setRedTeamLink(`localhost:3000/draft/${draft.id}/${draft.redTeam.id}`)
        setSpectatorLink(`localhost:3000/draft/${draft.id}`)
    } , [draft])


    // const socketInitializer = async () => {
    //     await fetch('/api/socket')
    //     socket = io()
    //     socket.on('connect' , () => {
    //         console.log("Connected")
    //     })
    //
    //     socket.on('update-log' , msg => {
    //         console.log("Sent from server")
    //     })
    //
    //     socket.on('setDraftSettings' , msg => {
    //         setDraftSettings(msg)
    //     })
    // }


    const addDraft = (draft) => {
        setDoc(doc(database, 'rooms' , draft.id) , draft).then(() => {
            console.log(`Room ${draft.id} has been `)
        }).catch((e) => {
            console.log(`Error occurred saving draft data: ${e}`)
        })
    }

    const createDraft = async () => {
        const response = await fetch('/api/draft/create' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({"r" :redTeamName , "b": blueTeamName})
        })
        const data = await response.json()
        setDraft(data)
        addDraft(data)
    }


    return (
        <div className={classes.homeContainer}>
            <div className={classes.mainLogoContainer}>
                <Image  alt={"League Icon"} src={"/../public/images/league-icon2.png"} height={150} width={150}></Image>
                <div className={classes.titleContainer}>
                    {/*<span className={classes.title}>Prodraft Tool</span>*/}
                </div>
                <div className={classes.draftLinksContainer}>
                    {!blueTeamLink && !redTeamLink ? <TeamNameInput  setRedTeamName={setRedTeamName} setBlueTeamName={setBlueTeamName} /> : <TeamLinks blueLink={blueTeamLink} redLink={redTeamLink} spectatorLink={spectatorLink}/>}
                </div>
                <div className={classes.linkGeneratorButtonContainer}>
                    {!blueTeamLink && !redTeamLink ? <button className={classes.linkGeneratorButton} onClick={() => {createDraft()} }>Create</button> : <button className={classes.linkGeneratorButton} onClick={() => {setBlueTeamLink("") , setRedTeamLink("")} }>New Draft</button> }
                </div>
            </div>
        </div>
        )
}




export default Home