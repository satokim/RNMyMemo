import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>+</CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Flex:1 は画面全体を選択状態
        flex: 1,
        // // ReactNativeでは縦方向,Webでは横方向
        // justifyContent: 'center',
        // // ReactNativeでは横方向,Webでは縦方向
        // alignItems: 'center'
        backgroundColor: '#ffffff'
    }
})

export default Index
