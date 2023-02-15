import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem'
import { useSelector } from 'react-redux'

const CategoriesScreens = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories)

  const handleSelectedCategory = (item) => {
    navigation.navigate("Products", { 
      categoryId: item.id,
      title: item.title,
    })
  }

  const renderCategoriesItem = ({item}) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
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
        backgroundColor: "white",
      },
      categoriesContainer: {
        padding: 15,
        height: 150,
      },
})