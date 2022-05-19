import Header from "./Header";
import ChampionContent from "./ChampionContent";
import Footer from "./Footer";


function Draft(props) {
    return (
         <>
             <Header redTeamName={props.data.redTeam.name}  blueTeamName={props.data.blueTeam.name}/>
             <ChampionContent data={props.data} champions={props.champions} updateDraftData={props.updateDraftData}/>
             <Footer data={props.data} setDraft={props.setDraft} socket={props.socket}/>
         </>
    )
}



export default Draft