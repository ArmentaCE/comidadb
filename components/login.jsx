import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //Guardar el estado del icono del ojo para mostrarlo o no.
  const [showPassword, setShowPassword] = React.useState(false);

  //POST a la API
  const [token, setToken] = React.useState("");

  const getToken = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({username: email, password: password}),
      });
    
      if(response.status === 200){
        const data = await response.json();
        setToken(data.token);
        console.log(token);
      }
      else{
        console.error("Credenciales no válidas");
      }
    } catch (error) {
      console.error("Hubo un problema al realizar la solicitud: ", error);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Login to your account</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        id="passTxt"
        value={password}
        onChangeText={(password) => setPassword(password)}
        //Mostrar el icono a la derecha del input
        right={
          <TextInput.Icon
            //Si el estado del icono es verdadero estará "cerrado"
            icon={showPassword ? "eye-off" : "eye"}
            //Actualización del estado cada vez que se presione
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
        //La visibilidad el texto se modifica
        secureTextEntry={!showPassword}
      />
      <Button
        icon="send"
        mode="contained"
        onPress={() => getToken()}
      >
        Login
      </Button>
      
      {token &&(
        <View>
            <Text>El token de acceso es: </Text>
            <Text>{token}</Text>
        </View>
      )}
    </View>
  );
}
