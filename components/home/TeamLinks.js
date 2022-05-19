import classes from "./Home.module.css";
import Image from "next/image";


function TeamLinks(props) {
    return (
        <>
            <input value={props.blueLink} className={classes.blueTeamLink} type={"text"} placeholder={"Blue Team"}  onClick={(e) => {navigator.clipboard.writeText(e.target.value)}} />
            <input value={props.redLink} className={classes.redTeamLink} type={"text"} placeholder={"Red Team"} onClick={(e) => {navigator.clipboard.writeText(e.target.value)}} />
            <input value={props.spectatorLink} className={classes.spectatorLink} type={"text"} onClick={(e) => {navigator.clipboard.writeText(e.target.value)}}/>
        </>
    )
}



export default TeamLinks