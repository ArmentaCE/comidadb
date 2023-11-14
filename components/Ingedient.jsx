import * as React from "react";
import { View , StyleSheet, ScrollView } from "react-native";
import { List, Avatar, Card, Text, Button, Portal, Modal, PaperProvider, Divider, Searchbar, Provider, configureFonts } from 'react-native-paper';


export function Ingredient(){
    const [ingredients, setIngredients] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [cards, setCards] = React.useState([]);
    
    const [modalVisible, setModalVisible] = React.useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const getMealByIngredient = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+searchQuery)
        .then(res => res.json())
        .then(data => setIngredients(data.meals))
        .catch((error) => {
            console.log(error);
        })
    }

    const getMealById = (id) => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        .then(res => res.json())
        .then(data => 
            setCards(data.meals)
            )
        .catch((error) => {
            console.log(error);
        })
        showModal();
    }

    const styles = StyleSheet.create({
        modal: {
            backgroundColor: "white",
            padding: 20
        },  

        instructions: {
            textAlign: "center",
            lineHeight:20
        }
      });

      const listMealsByIngredient = ingredients.map((meal) => 
    <View key={meal.idMeal}>
            <Card>
                <Card.Content>
                    <Text variant="titleLarge">{meal.strMeal} </Text>
                    <Card.Cover source={{ uri: meal.strMealThumb }} />
                    <br/>
                    
                    <Card.Actions>
                        <Button mode="contained" onPress={()=>getMealById(meal.idMeal)}>Ver ingredientes</Button>
                    </Card.Actions>

                </Card.Content>
            </Card>    
            <br/>
        </View>
    );


    const cardsList = cards.map((card) => 
    <Modal visible={modalVisible}  contentContainerStyle={styles.modal} onDismiss={hideModal} key={card.idMeal} dismissableBackButton={true}>
        <ScrollView>

            {((card.strIngredient1 != null) && ( card.strIngredient1 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient1} - {card.strMeasure1}</Text>:<></>}  
            {((card.strIngredient2 != null) && ( card.strIngredient2 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient2} - {card.strMeasure2}</Text>:<></>}  
            {((card.strIngredient3 != null) && ( card.strIngredient3 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient3} - {card.strMeasure3}</Text>:<></>}  
            {((card.strIngredient4 != null) && ( card.strIngredient4 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient4} - {card.strMeasure4}</Text>:<></>}  
            {((card.strIngredient5 != null) && ( card.strIngredient5 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient5} - {card.strMeasure5}</Text>:<></>}  
            {((card.strIngredient6 != null) && ( card.strIngredient6 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient6} - {card.strMeasure6}</Text>:<></>}  
            {((card.strIngredient7 != null) && ( card.strIngredient7 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient7} - {card.strMeasure7}</Text>:<></>}  
            {((card.strIngredient8 != null) && ( card.strIngredient8 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient8} - {card.strMeasure8}</Text>:<></>}  
            {((card.strIngredient9 != null) && ( card.strIngredient9 != "") ) ?  <Text theme={{colors: 'black'}}> {card.strIngredient9} - {card.strMeasure9}</Text>:<></>}  
            {((card.strIngredient10 != null) && (card.strIngredient10 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient10} - {card.strMeasure10} </Text>:<></>}  
            {((card.strIngredient11 != null) && (card.strIngredient11 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient11} - {card.strMeasure11} </Text>:<></>}  
            {((card.strIngredient12 != null) && (card.strIngredient12 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient12} - {card.strMeasure12} </Text>:<></>}  
            {((card.strIngredient13 != null) && (card.strIngredient13 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient13} - {card.strMeasure13} </Text>:<></>}  
            {((card.strIngredient14 != null) && (card.strIngredient14 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient14} - {card.strMeasure14} </Text>:<></>}  
            {((card.strIngredient15 != null) && (card.strIngredient15 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient15} - {card.strMeasure15} </Text>:<></>}  
            {((card.strIngredient16 != null) && (card.strIngredient16 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient16} - {card.strMeasure16} </Text>:<></>}  
            {((card.strIngredient17 != null) && (card.strIngredient17 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient17} - {card.strMeasure17} </Text>:<></>}  
            {((card.strIngredient18 != null) && (card.strIngredient18 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient18} - {card.strMeasure18} </Text>:<></>}  
            {((card.strIngredient19 != null) && (card.strIngredient19 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient19} - {card.strMeasure19} </Text>:<></>}  
            {((card.strIngredient20 != null) && (card.strIngredient20 != "") ) ? <Text theme={{colors: 'black'}}> {card.strIngredient20} - {card.strMeasure20} </Text>:<></>}    

            <Text variant="labelMedium">
            {"\n"}Instructions:{"\n"}
            </Text>
            <Text  theme={{colors: 'black'}} variant="bodySmall">
                {card.strInstructions}
            </Text>
            

        </ScrollView>
    </Modal>

    );

    return(
        <PaperProvider>
        <View>
            <br/>
            <Text  theme={{colors: 'black'}} variant="titleMedium"></Text>
            <br/>
            <Searchbar
                placeholder="Search"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                onSubmitEditing={getMealByIngredient}
            />
            <br/>       
            <>
                {listMealsByIngredient}
            </>
            <Portal>
                {cardsList}
            </Portal>
        </View>
        </PaperProvider>
    );
};


