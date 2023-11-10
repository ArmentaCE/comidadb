import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button, Provider, Portal, TextInput } from 'react-native-paper';

export const Modal1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const handleButtonPress = () => showModal();

  const handleSave = () => {
    // Aquí puedes realizar la acción que desees con el valor del input
    console.log('Valor del input:', inputValue);
    hideModal();
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Button mode="contained" onPress={handleButtonPress}>
          Abrir Modal
        </Button>

        <Portal>
          <Modal visible={modalVisible} onRequestClose={hideModal} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <TextInput
                label="Ingresa algo"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
              <Button mode="contained" onPress={handleSave}>
                Guardar
              </Button>
              <Button mode="outlined" onPress={hideModal}>
                Cancelar
              </Button>
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

// export default App;
