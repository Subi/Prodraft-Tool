import Header from "../../../components/draft/Header";
import ChampionContent from "../../../components/draft/ChampionContent";
import Footer from '../../../components/draft/Footer';
import {useContext} from "react";
import DraftProvider, {DraftContext} from "../../../context/state";


function SpectatorView()  {
    const {draft} = useContext(DraftContext)

    console.log(draft)

    //
    // const roomInitializer = async () => {
    //     await fetch('/api/')
    // }




    // const router = useRouter()
    //
    // console.log(router)


    return (
        <>
            <Header/>
            <ChampionContent/>
            <Footer/>
        </>
    )
}



export default SpectatorView