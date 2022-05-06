import classes from './Footer.module.css'

function BannedChampion({image}){
    return (
        <div className={classes.bannedChampion} style={{backgroundImage: `url(${image})` ,backgroundRepeat: "no-repeat" , backgroundSize: "cover"}}>
        </div>
    )
}


export default BannedChampion