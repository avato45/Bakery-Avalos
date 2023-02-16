import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailsScreen = ({ navigation, route }) => {
  const bread = useSelector(state => state.products.selected)

  useEffect(() => {
    console.log(route.params);
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button 
      title="Add to Cart" 
      onPress={() => console.log("agregar al carrito")} 
      />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})