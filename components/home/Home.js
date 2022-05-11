import classes from './Home.module.css'
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import {io} from "socket.io-client";
import TeamNameInput from "./TeamNameInput";
import TeamLinks from "./TeamLinks";
import SpectatorView from "../../pages/draft/[roomId]";
import {DraftContext} from "../../context/state";



function Home() {
    const [blueTeamLink , setBlueTeamLink] = useState('')
    const [redTeamLink , setRedTeamLink] = useState('')
    const [spectatorLink , setSpectatorLink] = useState('')
    const [redTeamName , setRedTeamName] = useState('')
    const [blueTeamName , setBlueTeamName] = useState('')

    const {draft , updateDraft} = useContext(DraftContext)


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


    const createDraft = async () => {
        const response = await fetch('/api/draft/create' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({"r" :redTeamName , "b": blueTeamName})
        })
        updateDraft(await response.json())
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
                    <button className={classes.linkGeneratorButton} onClick={() => {createDraft()} }>Create</button>
                </div>
            </div>
        </div>
        )
}




export default Home