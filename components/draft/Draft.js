import Header from "./Header";
import ChampionContent from "./ChampionContent";
import Footer from "./Footer";


function Draft(props) {
    return (
         <>
             <Header redTeamName={props.data.redTeam.name} blueTeamName={props.data.blueTeam.name} />
             <ChampionContent data={props.data} champions={props.champions} setPreviewChampion={props.setPreviewChampion}  />
             <Footer data={props.data} dispatch={props.dispatch} socket={props.socket} previewChampion={props.previewChampion}/>
         </>
    )
}



export default Draft