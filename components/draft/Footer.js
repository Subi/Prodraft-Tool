import classes from "./Footer.module.css";
import BannedChampion from "./BannedChampion";

function Footer() {
    return (
        <div className={classes.bannedChampionsContainer}>
            <div className={classes.blueSideBansContainer}>
                <div className={classes.blueSideBansFirstPhaseContainer}>
                    <BannedChampion/>
                    <BannedChampion/>
                    <BannedChampion/>
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Hecarim.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Ryze.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Karma.png"}/>*/}
                </div>
                <div className={classes.blueSideBansSecondPhaseContainer}>
                    <BannedChampion/>
                    <BannedChampion/>
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Malphite.png" }/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Rakan.png"}/>*/}
                </div>
            </div>
            <div className={classes.redSideBansContainer}>
                <div className={classes.redSideBansFirstPhaseContainer}>
                    <BannedChampion/>
                    <BannedChampion/>
                    <BannedChampion/>
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zilean.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Nautilus.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/TwistedFate.png"}/>*/}
                </div>
                <div className={classes.redSideBansSecondPhaseContainer}>
                    <BannedChampion/>
                    <BannedChampion/>
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Caitlyn.png"}/>*/}
                    {/*<BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Zeri.png"}/>*/}
                </div>
            </div>
        </div>
    )
}


export default Footer