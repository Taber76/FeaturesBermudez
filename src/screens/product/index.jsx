import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const Product = ({ route }) => {
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
        <View>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
