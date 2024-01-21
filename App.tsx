import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import tw from 'twrnc';
import Home from './app/HomePage/Home';
import Search from './app/Search';
import Header from './components/Header';
import UserProfile from './app/userSection/UserProfile';
import Colors from './constants/Colors';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home?: undefined;
  Search?: undefined;
  UserProfile?:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>

      <StatusBar backgroundColor={Colors.secondary} barStyle='light-content' />
      <SafeAreaView style={styles.androidSafeArea}>
        {/* <Home /> */}
        <View style={tw`h-full w-full mt-3`}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  contentStyle: styles.container,
                }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{
                  headerShown: false,
                  contentStyle: styles.container,
                }}
              />
              <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{
                  headerShown: false,
                  contentStyle: styles.container,
                }}
              />
            </Stack.Navigator>
            <Footer />
          </NavigationContainer>
        </View>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: '100%',
    height: '100%',
  },
  androidSafeArea: {
    backgroundColor: Colors.secondary,
    // paddingTop:Platform.OS === 'android' ? 25 : 0,
  }
});
