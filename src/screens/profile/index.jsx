import React from "react";
import { View, Text } from "react-native";

import { Head } from "../../components";
import { styles } from "./styles";

const Profile = () => {
  return (
    <View>
      <Head />
      <View style={styles.container}>
        <Text style={styles.title}>DATOS USUARIO</Text>
      </View>
    </View>
  );
};

export default Profile;
