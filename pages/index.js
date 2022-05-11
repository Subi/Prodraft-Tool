import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/home/Home'
import {useEffect} from "react";
import io from 'socket.io-client'


function LandingPage(){
    return (
        <Home/>
    )
}
export default LandingPage
