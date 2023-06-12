import React from "react";
import { FlatList, View, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { Head, SearchBar, ButtonIcon, StoreList } from "../../components/index";
import { selectCategory } from "../../store/actions";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);

  return (
    <View style={styles.container}>
      <Head />
      <View style={styles.contentContainer}>
        <SearchBar />
        <View style={styles.buttonsContainer}>
          <ButtonIcon
            icon={require("../../../assets/images/iconofiltro.png")}
            text="Filtrar"
            width={130}
            height={50}
            onPress={() => console.log("Filtrar")}
          />
          <ButtonIcon
            icon={require("../../../assets/images/iconoordenar.png")}
            text="Ordenar"
            width={130}
            height={50}
            onPress={() => console.log("Ordenar")}
          />
        </View>
        <StoreList />
      </View>
    </View>
  );
};

export default Search;
