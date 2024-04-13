import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
    return (
        <View style = { styles.container }>

            <View>
                <View>
                    <Text>RNMyMemo</Text>
                    <Text>Logout</Text>
                </View>
            </View>

            <View>
                <View>
                    <View>
                        <Text>Buy list</Text>
                        <Text>2023.10.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Buy list</Text>
                        <Text>2023.10.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Buy list</Text>
                        <Text>2023.10.01 10:00</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>

            </View>

            <View>
                <Text>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // ReactNativeでは縦方向,Webでは横方向
        justifyContent: 'center',
        // ReactNativeでは横方向,Webでは縦方向
        alignItems: 'center'
    }
})

export default Index
