import classes from "./ChampionCarousel.module.css"
import Champions from "./Champions";
import Image from "next/image";


function  ChampionCarousel(props){
    return (
        <div className={classes.championsCarouselContainer}>
            <div className={classes.championsCarouselFilterContainer}>
                <div className={classes.rolesFilterContainer}>
                    <Image src={"/images/Position_Challenger-top.png"} width={45} height={45}/>
                    <Image src={"/images/Position_Challenger-jungle.png"} width={45} height={45}/>
                    <Image src={"/images/Position_Challenger-mid.png"} width={45} height={45}/>
                    <Image src={"/images/Position_Challenger-bot.png"} width={45} height={45}/>
                    <Image src={"/images/Position_Challenger-support.png"} width={45} height={45}/>
                </div>
                <div className={classes.searchbarFilterContainer}>
                    <input className={classes.searchbarFilter} type={"text"} placeholder={"Search"}/>
                </div>
            </div>
            <div className={classes.championsCarousel}>
                <Champions champions={props.champions} updateDraftData={props.updateDraftData} setPreviewChampion={props.setPreviewChampion}/>
            </div>
        </div>
    )
}


export default ChampionCarousel