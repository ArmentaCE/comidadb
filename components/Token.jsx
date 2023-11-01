import { View, Text, StyleSheet } from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  button: {
    marginBottom: 7,
    marginRight: 20,
    marginLeft: 20
  },
  container: {
    marginTop: 5,
    marginBottom: 40,
  },
});

export function Token({ route, navigation }) {
  const { txtToken } = route.params;

  return (
    <>
      <View style={styles.container}>
        <Text>Your access token is: </Text>
        <Text>{JSON.stringify(txtToken)}</Text>
      </View>
      <Button
        style={styles.button}
        icon="silverware-fork-knife"
        mode="contained"
        onPress={() => navigation.navigate("mealByName")}
      >
        Search meal by Name
      </Button>
      <Button
        style={styles.button}
        icon="silverware"
        mode="contained"
        onPress={() => navigation.navigate("mealByIngredient")}
      >
        Search meal by ingredient
      </Button>
      <Button
        style={styles.button}
        icon="silverware-fork"
        mode="contained"
        onPress={() => navigation.navigate("mealByCategory")}
      >
        Search meal by category
      </Button>
    </>
  );
}
