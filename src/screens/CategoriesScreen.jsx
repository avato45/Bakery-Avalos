import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreens = () => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreens</Text>
    </View>
  )
}

export default CategoriesScreens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})