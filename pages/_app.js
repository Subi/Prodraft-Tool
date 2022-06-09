import '../styles/globals.css'
import App from "next/app"
import DraftProvider, {DraftContext} from "../context/state";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../firebase/firebaseConfig";



function MyApp({ Component, pageProps , }) {
  return (
        <Component {...pageProps} />
  )
}

//
// MyApp.getInitialProps = async (context) => {
//
//
//
//     let {roomId ,teamId} = context.ctx.query
//     // console.log(context.ctx.query)
//     // console.log("Here")
//     let championsArr = []
//
//
//     const response = await getDoc(doc(database, "rooms", context.ctx.query.roomId)).then((snap) => {
//         if (!snap.exists()) {
//             console.log("Can't find room")
//         }
//         return snap.data()
//     }).catch((e) => {
//         console.log(e)
//     })
//
//
//     const getCurrentTeam = () => {
//         if(teamId === response.blueTeam.id) {
//             return "blueTeam"
//         } else {
//             return "redTeam"
//         }
//     }
//
//
//     const draftData = {
//         id: response.id,
//         currentTurn: 0,
//         currentTeam: getCurrentTeam(),
//         timeLeft: 30,
//         blueTeam: {
//             id: response.blueTeam.id,
//             name: response.blueTeam.name,
//             currentAction: "INITIALIZING",
//             isReady: false,
//             isTurn: false,
//             bans: []
//         },
//         redTeam: {
//             id: response.redTeam.id,
//             name: response.redTeam.name,
//             currentAction: "INITIALIZING",
//             isReady: false,
//             isTurn: false,
//             bans: []
//         },
//     }
//
//
//     const championResponse = await fetch("https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json", {method: "GET"})
//
//     let {data} = await championResponse.json()
//
//     for (let champion in data) {
//         championsArr.push({
//             name: data[champion].name,
//             key: data[champion].key,
//             image: data[champion].image,
//             isPicked: false
//         })
//     }
//
//
//     return {
//         props: {championsArr , draftData}
//     }
// }
//


export default MyApp
