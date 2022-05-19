import classes from "./ChampionContent.module.css"
import ChampionSplash from "./ChampionSplash";
import ChampionCarousel from "./ChampionCarousel";

function ChampionContent(props){
    return (
        <div className={classes.ChampionContentContainer}>
            <div className={classes.blueTeamPicks}>
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                <ChampionSplash name={"Lee Sin"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/64/64000.jpg'}/>
                <ChampionSplash name={"Ezreal"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/81/81000.jpg'}/>
                <ChampionSplash name={"Karma"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/43/43000.jpg'}/>
                <ChampionSplash name={"Akali"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/84/84000.jpg'}/>
                <ChampionSplash name={"Gwen"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/887/887000.jpg'}/>
            </div>
            <ChampionCarousel champions={props.champions} updateDraftData={props.updateDraftData}/>
            <div className={classes.redTeamPicks}>
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                {/*<ChampionSplash/>*/}
                <ChampionSplash name={"Jinx"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/222/222000.jpg'}/>
                <ChampionSplash name={"Xin Zhao"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/5/5000.jpg'}/>
                <ChampionSplash name={"Tahm Kench"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/223/223000.jpg'}/>
                <ChampionSplash name={"Viktor"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/112/112000.jpg'}/>
                <ChampionSplash name={"Kennen"} image={'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/85/85000.jpg'}/>
            </div>
        </div>
    )
}

export default ChampionContent