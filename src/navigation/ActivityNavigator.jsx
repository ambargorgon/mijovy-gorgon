import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyActivities from "../screens/Profile/MyActivities";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";
import NewActivity from "../screens/Profile/MyActivities/NewActivity";

const ActivityNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyActivities"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="MyActivities" component={MyActivities} options={{ headerShown: false }} />
      <Stack.Screen name="NewActivity" component={NewActivity} options={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: { color: Colors.white },
        title: 'Nueva Actividad',
        tabBarIcon: () => (
          <Ionicons name="arrow-back" color={Colors.white} size={25} onPress={() => navigation.navigate("MyActivities")} />
        ),
      }} />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;

