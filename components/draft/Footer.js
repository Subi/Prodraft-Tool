import classes from "./Footer.module.css";
import BannedChampion from "./BannedChampion";

function Footer() {
    return (
        <div className={classes.bannedChampionsContainer}>
            <div className={classes.blueSideBansContainer}>
                <div className={classes.blueSideBansFirstPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Hecarim_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Karma_0.jpg"}/>
                </div>
                <div className={classes.blueSideBansSecondPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Malphite_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rakan_0.jpg"}/>
                </div>
            </div>
            <div className={classes.redSideBansContainer}>
                <div className={classes.redSideBansFirstPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zilean_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nautilus_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/TwistedFate_0.jpg"}/>
                </div>
                <div className={classes.redSideBansSecondPhaseContainer}>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg"}/>
                    <BannedChampion image={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zeri_0.jpg"}/>
                </div>
            </div>
        </div>
    )
}


export default Footer