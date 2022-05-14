import classes from './ChampionContent.module.css'

function ChampionSplash({name , image}) {
    return (
        <div className={classes.championSplash} style={{backgroundImage: `url(${image})`}}>
            <div className={classes.championName}>{name}</div>
        </div>
    )
}


export default ChampionSplash