import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import { Categorias } from "../../data/Categorias";
import Category from "../../components/Category";

const Search = ({ navigation }) => {


  const handleSelectedCategory = (item) => {
    navigation.navigate("Activities", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategories = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <Category item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Categorias}
        renderItem={renderCategories}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;
