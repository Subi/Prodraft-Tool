import classes from "./Header.module.css"
import Image from 'next/image'
import {useEffect, useState} from "react";

function Header(props) {
    const [time , setTime] = useState(30)

    useEffect(() => {
        if(time == 0 ) return
        setTimeout(() => {
            setTime(prevState => prevState - 1)
        } ,  1000)
    } , [time])


    return (
        <div className={classes.headerContainer}>
            <div className={classes.blueTeamContainer}>
                {/*<div className={classes.blueTeamLogo}>*/}
                {/*    <Image src="/../public/images/T1logo_profile.png" height={100} width={150}/>*/}
                {/*</div>*/}
                <div className={classes.blueTeamName}>
                    {props.redTeamName}
                </div>
                {/*<div className={classes.blueTeamScore}>*/}
                {/*    1*/}
                {/*</div>*/}
            </div>
            <div className={classes.timerContainer}>
                <span className={classes.timer}>{time}</span>
                {/*<h3>:59</h3>*/}
                    {/*<h3 className={classes.timer}>:59</h3>*/}

            </div>
            <div className={classes.redTeamContainer}>
                {/*<div className={classes.redTeamScore}>*/}
                {/*    1*/}
                {/*</div>*/}
                <div className={classes.redTeamName}>
                    {props.blueTeamName}
                </div>
                {/*<div className={classes.redTeamLogo}>*/}
                {/*    <Image src="/../public/images/gen_g.png" height={100} width={110}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}


export default Header