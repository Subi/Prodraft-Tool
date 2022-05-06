import classes from "./Header.module.css"
import Image from 'next/image'

function Header() {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.blueTeamContainer}>
                <div className={classes.blueTeamLogo}>
                    <Image src="/../public/images/T1logo_profile.png" height={100} width={150}/>
                </div>
                <div className={classes.blueTeamName}>
                    T1
                </div>
                <div className={classes.blueTeamScore}>
                    1
                </div>
            </div>
            <div className={classes.timerContainer}>
                    <p className={classes.timer}>:59</p>
                    <span>Patch 12.11</span>
            </div>
            <div className={classes.redTeamContainer}>
                <div className={classes.redTeamScore}>
                    1
                </div>
                <div className={classes.redTeamName}>
                    GEN
                </div>
                <div className={classes.redTeamLogo}>
                    <Image src="/../public/images/gen_g.png" height={100} width={110}/>
                </div>
            </div>
        </div>
    )
}


export default Header