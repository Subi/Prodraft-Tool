import classes from "./Footer.module.css";
import BannedChampion from "./BannedChampion";
import {useEffect, useState} from "react";

function Footer(props) {
    const [buttonText , setButtonText] = useState("Ready")
    const [buttonStyle , setButtonStyle] = useState({})
    const [disabled , setDisabled] = useState(false)


    const getButtonText = () => {
        switch (props.data[props.data.currentTeam].currentAction) {
            case "BANNING":
                return "Ban"
            case "WAITING":
                return "Waiting"
            case "PICKING":
                return "Lock In"
            default:
                return "Ready"
        }
    }

    const getButtonStyle = () => {
        switch (props.data[props.data.currentTeam].currentAction) {
            case "WAITING":
                return classes.waitingButton
            default:
                return classes.readyButton
        }
    }

    const updateTeamReadyState = () => {
        if(getButtonText() === "Ready") {
            props.socket.emit("READY_UP" , props.data.currentTeam)
            props.dispatch({type: "READY_UP" , payload: props.data.currentTeam})
        }
        if(getButtonText() === "Ban") {
            props.dispatch({type: "BAN" , payload: props.previewChampion})
        }
    }
    return (
        <div className={classes.footerContainer}>
            <div className={classes.blueSideBansContainer}>
                <div className={classes.blueSideBansFirstPhaseContainer}>
                    {props.data.blueTeam.bans.map((ban , index) => {
                             return <BannedChampion image={ban} />}
                    )}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zilean.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Nautilus.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/TwistedFate.png"}/>*/}
                </div>
                <div className={classes.blueSideBansSecondPhaseContainer}>
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Caitlyn.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zeri.png"}/>*/}
                </div>
            </div>
            <div className={classes.readyButtonContainer}>
                <button className={getButtonStyle()} onClick={() => {updateTeamReadyState()}}>
                    {getButtonText()}
                </button>
            </div>
            <div className={classes.redSideBansContainer}>
                <div className={classes.redSideBansFirstPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zilean.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Nautilus.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/TwistedFate.png"}/>
                </div>
                <div className={classes.redSideBansSecondPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Caitlyn.png"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zeri.png"}/>
                </div>
            </div>
        </div>
    )
}


export default Footer