import classes from './Footer.module.css'

function BannedChampion({image}){
    return (
        <div className={classes.bannedChampionContainer} style={{backgroundImage: `url(${image})`}}>
            {/*<div className={classes.bannedChampion} style={{backgroundImage: `url(${image})`}}>*/}
            {/*</div>*/}
        </div>

    )
}


export default BannedChampion