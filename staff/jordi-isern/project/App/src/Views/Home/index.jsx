import Header from "../../components/Library/Header"
import View from "../../components/Library/View"
import HistoryButton from "../../components/Library/HistoryButton"



function Home () {
    return(<View>
        <Header></Header>
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover h-[95vh] pt-6 pl-8 grid grid-cols-5 gap-7 items-start'>
            <HistoryButton Title={'Dragon Lance'}></HistoryButton>
            <HistoryButton Title={'Dragon Lance 2'}></HistoryButton>
        </View>
    </View>
    )
}

export default Home