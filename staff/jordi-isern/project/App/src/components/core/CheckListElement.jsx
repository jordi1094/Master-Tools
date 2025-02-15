import View from "../Library/View"
import logic from "../../logic"

function CheckListElement({task, mission}){
    const onClickCheckBox = () => {
        task.status = !task.status
        logic.changeTaskStatus(mission.id, task)
        .then()
        .catch(error => console.log(error))
    }
    return <View className='grid grid-cols-[2fr_5fr] items-center'>
            <input type='checkbox' onChange={onClickCheckBox} defaultChecked={task.status} id={task.task} className='h-[1.5vh] justify-self-end mr-[1vw]'/>
            <label for={task.task} className='text-black'> {task.task}</label> 
        </View>
}

export default CheckListElement