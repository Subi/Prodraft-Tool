import classes from "./ChampionCarousel.module.css"



function Champions(props){

    const championOptions= props.champions.map((champion) => {
      return <img className={classes.championOptionImage} onClick={() => props.setUpdateData(champion.name)} key={champion.key} src={`https://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion.image.full}`}/>
    })

    return (
        <div className={classes.championOptionsGrid} >
            {championOptions}
        </div>
    )
}




export default Champions