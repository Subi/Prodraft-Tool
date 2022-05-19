import classes from "./Footer.module.css";
import BannedChampion from "./BannedChampion";
import {useEffect, useState} from "react";

function Footer(props) {
    const [buttonText , setButtonText] = useState("Ready")
    const [buttonStyle , setButtonStyle] = useState({})

    useEffect(() => {
        setButtonStyle(classes.readyButton)
    } , [])




    const updateReadyValue = () => {
        props.setDraft({...props.data ,   [props.data.currentTeam]: {...[props.data.currentTeam] , isReady:true}})
        props.socket.emit("ready up" , props.data.currentTeam)
    }

    return (
        <div className={classes.footerContainer}>
            <div className={classes.blueSideBansContainer}>
                <div className={classes.blueSideBansFirstPhaseContainer}>
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Hecarim.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Ryze.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Karma.png"}/>
                </div>
                <div className={classes.blueSideBansSecondPhaseContainer}>
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Malphite.png" }/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Rakan.png"}/>
                </div>
            </div>
            <div className={classes.readyButtonContainer}>
                <button className={buttonStyle} onClick={() => {setButtonText("Waiting") , setButtonStyle(classes.waitingButton) ,  updateReadyValue() }}>
                    {buttonText}
                </button>
            </div>
            <div className={classes.redSideBansContainer}>
                <div className={classes.redSideBansFirstPhaseContainer}>
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zilean.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Nautilus.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/TwistedFate.png"}/>
                </div>
                <div className={classes.redSideBansSecondPhaseContainer}>
                    {/*<BannedChampion/>*/}
                    {/*<BannedChampion/>*/}
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Caitlyn.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zeri.png"}/>
                </div>
            </div>
        </div>
    )
}


export default Footer