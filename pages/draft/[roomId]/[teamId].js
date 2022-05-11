import {useRouter} from "next/router";
import {useContext} from "react";
import {DraftContext} from "../../../context/state";


function TeamView() {
    const router = useRouter()
    const { draft } = useContext(DraftContext)
    console.log("this is the draft" , draft)
    return (
        <h1>This is a team view</h1>
    )
}


export default TeamView