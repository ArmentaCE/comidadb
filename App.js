import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './components/Login';
import { Token } from './components/Token';
import { Category } from './components/Category'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ingredient } from './components/Ingedient';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      {/* <Login/>
      <StatusBar style="auto" /> */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Token' component={Token}/> */}

          {/* Rutas de la comida por nombre, categoria e ingrediente */}
          {/* IMPORTANTE cambiar el nombre del componente*/}
          {/* Sí cambiaste el nombre de la ruta asegurate de ir al componente "Token" y hacer el respectivo cambio para que el boton pueda encontrar dicha ruta */}
          {/* <Stack.Screen name='mealByName' component={Token}/> */}
          <Stack.Screen name='mealByIngredient' component={Ingredient}/>
          <Stack.Screen name='mealByCategory' component={Category} options={{title: "Busqueda por categoria"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 10,
  },
});
