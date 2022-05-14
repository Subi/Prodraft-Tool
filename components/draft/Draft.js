import Header from "./Header";
import ChampionContent from "./ChampionContent";
import Footer from "./Footer";
import ChampionContent from "./ChampionContent";


function Draft(props) {
    return (
         <>
             <Header redTeamName={props.data.redTeam.name}  blueTeamName={props.data.blueTeam.name}/>
             <ChampionContent/>
             <Footer/>
         </>
    )
}



export default Draft