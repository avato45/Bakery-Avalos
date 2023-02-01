import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoriesScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreens</Text>
      <Button
      title='Go to Products'
      onPress={() => navigation.navigate("Products")}
      />
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