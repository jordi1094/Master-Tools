import { useState, useEffect } from "react"
import logic from "../../logic"
import Button from "../core/Button"

function EnemiesSearch ({onAddEnemy}) {
    const [enemies, setEnemies] = useState([])
    const [searchTerm, setsearchTerm] = useState('')
    const[ filteredEnemies, setFilteresEnemies] = useState([])
     
    // TODO use efect si no cargo toda la api
    logic.getFullMonterList()
        .then((fullMonterListApi) => {
            setEnemies(fullMonterListApi.results)
        })
        .catch((error) => {
            console.log(error)
        })

    const handleInputChange = (event) => {
        const value = event.target.value
        setsearchTerm(value)
    
        if (value){
            const resutls = enemies.filter((enemy) =>
                enemy.name.toLowerCase().includes(value.toLowerCase())
            )
            setFilteresEnemies(resutls)
        }else { setFilteresEnemies([])}
    }
    
    return(
        <div>
            <input value={searchTerm} placeholder="Search a enemy" onChange={handleInputChange} className= 'rounded-md px-2 text-black'></input>
            {filteredEnemies.length > 0 && <ul className="max-h-[20vh] overflow-y-scroll">
                {filteredEnemies.map((enemy, index) => <li key={index} onClick={()=> onAddEnemy(enemy)} className="cursor-pointer">{enemy.name}</li>)}
                </ul>
            }
        </div>
    )
} 

export default EnemiesSearch