import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INFO</Text>
      <Text style={styles.title} className="mx-auto px-[12] justify-center">
        This is a first time i learn react native so i think this app have a
        many trouble but i hope ih the future i cant fix it
      </Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
})
