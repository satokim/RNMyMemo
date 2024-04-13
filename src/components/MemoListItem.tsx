import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>Buy list</Text>
                <Text style={styles.memoListItemDate}>2023.10.01 10:00</Text>
            </View>
            <View>
                <Text>X</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        // Defaultは縦方向なので横方向に指定。flexDirectionはDefaultの位置を指定する。
        // ReactNativeでは縦方向 -> 横方向、Webでは横方向 -> 縦方向
        // justifyContent: 'center',
        // ReactNativeでは横方向 -> 縦方向、Webでは縦方向 -> 横方向
        // alignItems: 'center'
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem