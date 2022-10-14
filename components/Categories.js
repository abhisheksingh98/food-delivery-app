import { ScrollView,View, Text } from "react-native";
import React from 'react'
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" title="testing" />
      <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" title="testing" />
      <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" title="testing" />
      <CategoryCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" title="testing" />
    </ScrollView>
  );
}

export default Categories