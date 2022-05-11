import classes from "./Home.module.css";


function TeamLinks(props) {
    return (
        <>
            <input value={props.blueLink} className={classes.blueTeamLink} type={"text"} placeholder={"Blue Team"}  />
            <input value={props.redLink} className={classes.redTeamLink} type={"text"} placeholder={"Red Team"} />
            <input value={props.spectatorLink} className={classes.spectatorLink} type={"text"}/>
        </>
    )
}



export default TeamLinks