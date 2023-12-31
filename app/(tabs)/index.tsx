import { StyleSheet } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-6xl pb-12">Welcome</Text>
      <Text
        className="text-red-200 flex-1 justify-center items-center"
        style={styles.title}>
        This a database about a genshin impact you can find artifact, character
        and weapon in this app btw this is a fan made app
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
