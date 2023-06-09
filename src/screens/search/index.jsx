import React from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem, Head } from "../../components/index";
import { selectCategory } from "../../store/actions";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      categoryName: item.name,
      categoryColor: item.color,
    });
  };

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={onSelected} />;
  };
  const keyExtractor = (item) => item.id.toString();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Head />
      </TouchableOpacity>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Search;
