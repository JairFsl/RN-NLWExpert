import { CategoryButton } from "@/components/category";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleCategoryClick(selectedCategory: string) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex-1 py-4">
      <Header title="Faça seu pedido" cartQuatityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoryClick(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 10 }}
      />

      {/* <View className="flex-row gap-4">
        <Category title="Todos" isSelected />
        <Category title="Todos" />
        <Category title="Todos" />
      </View> */}
    </View>
  );
}
