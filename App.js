
import FolderScreen from './screens/FolderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createNativeStackNavigator();
export default function App() {

  return (

    // <FolderScreen/>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="FolderScreen" component={FolderScreen} />
        <Stack.Screen options={{ headerShown: false }}  name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }}  name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


