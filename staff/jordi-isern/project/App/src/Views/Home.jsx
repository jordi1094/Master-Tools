import '../App.css'
import './Home.css'

import Header from '../components/Library/Header'
import View from '../components/Library/View'
import HistoryButton from '../components/Library/HistoryButton'



function Home () {
    return(<View>
        <Header></Header>
        <View className={'Main'}>
            <HistoryButton Title={'Dragon Lance'}></HistoryButton>
        </View>
    </View>
    )
}

export default Home

