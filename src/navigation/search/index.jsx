import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../../screens/index";
import { COLORS } from "../../constants/index";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
