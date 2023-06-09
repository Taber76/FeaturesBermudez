import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import AppNavigator from "./navigation";
import store from "./store/index";
import { styles } from "./styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("../assets/fonts/Rubik-Black.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
