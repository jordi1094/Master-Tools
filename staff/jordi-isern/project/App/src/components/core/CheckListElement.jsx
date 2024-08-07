import View from "../Library/View"

function CheckListElement({children}){

    return <View className='grid grid-cols-[2fr_5fr] items-center'>
            <input type='checkbox' id={children} className='h-[1.5vh] justify-self-end mr-[1vw]'/>
            <label for={children} className='text-black'> {children}</label> 
        </View>
}

export default CheckListElement