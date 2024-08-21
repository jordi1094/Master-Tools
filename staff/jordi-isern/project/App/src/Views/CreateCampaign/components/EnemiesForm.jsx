import { useState } from "react"
import logic from "../../../logic"
import EnemiesSearch from "../../../components/Library/EnemiesSearch"

function EnemiesForm (){

    return (
    <div className="fixed w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center top-0 ">
        <h1></h1>
        <EnemiesSearch/>
    </div>)
}

export default EnemiesForm