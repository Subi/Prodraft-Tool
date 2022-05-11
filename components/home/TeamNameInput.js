import classes from "./Home.module.css";


function TeamNameInput(props) {
    return (
        <>
            <input className={classes.blueTeamLink} type={"text"} placeholder={"Blue Team"} onChange={(e) => {props.setBlueTeamName(e.target.value)}} />
            <input className={classes.redTeamLink} type={"text"} placeholder={"Red Team"} onChange={(e) => {props.setRedTeamName(e.target.value)}}/>
        </>
    )
}



export default TeamNameInput