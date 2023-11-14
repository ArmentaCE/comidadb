import * as React from "react";
import { View , StyleSheet, ScrollView } from "react-native";
import { List, Avatar, Card, Text, Button, Portal, Modal, PaperProvider, Divider, Searchbar, Provider, configureFonts } from 'react-native-paper';

export function Name(){

    const [names, setNames] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [recipes, setRecipes] = React.useState([]);

    const [modalVisible, setModalVisible] = React.useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const getMealByName = () => {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchQuery)
            .then(res => res.json())
            .then(data => setNames(data.meals))
            .catch((error) => {
                console.log(error);
            })
        }
        
    const getMealById = (id) => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        .then(res => res.json())
        .then(data => 
            setRecipes(data.meals)
            )
        .catch((error) => {
            console.log(error);
        })
        showModal();
    }

    const searchMealByNameClick = (event) => {
        if(event.key == "Enter"){
            getMealByName();
        }
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

    const listMealsByName = names.map((meal) => 
    <View key={meal.idMeal}>
            <Card>
                <Card.Content>
                    <Text variant="titleLarge">{meal.strMeal} </Text>
                    <Card.Cover source={{ uri: meal.strMealThumb }} />
                    <br/>
                    
                    <Card.Actions>
                        <Button mode="contained" onPress={()=>getMealById(meal.idMeal)}>Ver receta</Button>
                    </Card.Actions>

                </Card.Content>
            </Card>    
            <br/>
        </View>
    );

    const recipesList = recipes.map((recipe) => 
    <Modal visible={modalVisible}  contentContainerStyle={styles.modal} onDismiss={hideModal} key={recipe.idMeal} dismissableBackButton={true}>
        <ScrollView>

            {((recipe.strIngredient1 != null) && ( recipe.strIngredient1 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient1} - {recipe.strMeasure1}</Text>:<></>}  
            {((recipe.strIngredient2 != null) && ( recipe.strIngredient2 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient2} - {recipe.strMeasure2}</Text>:<></>}  
            {((recipe.strIngredient3 != null) && ( recipe.strIngredient3 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient3} - {recipe.strMeasure3}</Text>:<></>}  
            {((recipe.strIngredient4 != null) && ( recipe.strIngredient4 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient4} - {recipe.strMeasure4}</Text>:<></>}  
            {((recipe.strIngredient5 != null) && ( recipe.strIngredient5 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient5} - {recipe.strMeasure5}</Text>:<></>}  
            {((recipe.strIngredient6 != null) && ( recipe.strIngredient6 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient6} - {recipe.strMeasure6}</Text>:<></>}  
            {((recipe.strIngredient7 != null) && ( recipe.strIngredient7 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient7} - {recipe.strMeasure7}</Text>:<></>}  
            {((recipe.strIngredient8 != null) && ( recipe.strIngredient8 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient8} - {recipe.strMeasure8}</Text>:<></>}  
            {((recipe.strIngredient9 != null) && ( recipe.strIngredient9 != "") ) ?  <Text theme={{colors: 'black'}}> {recipe.strIngredient9} - {recipe.strMeasure9}</Text>:<></>}  
            {((recipe.strIngredient10 != null) && (recipe.strIngredient10 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient10} - {recipe.strMeasure10} </Text>:<></>}  
            {((recipe.strIngredient11 != null) && (recipe.strIngredient11 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient11} - {recipe.strMeasure11} </Text>:<></>}  
            {((recipe.strIngredient12 != null) && (recipe.strIngredient12 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient12} - {recipe.strMeasure12} </Text>:<></>}  
            {((recipe.strIngredient13 != null) && (recipe.strIngredient13 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient13} - {recipe.strMeasure13} </Text>:<></>}  
            {((recipe.strIngredient14 != null) && (recipe.strIngredient14 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient14} - {recipe.strMeasure14} </Text>:<></>}  
            {((recipe.strIngredient15 != null) && (recipe.strIngredient15 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient15} - {recipe.strMeasure15} </Text>:<></>}  
            {((recipe.strIngredient16 != null) && (recipe.strIngredient16 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient16} - {recipe.strMeasure16} </Text>:<></>}  
            {((recipe.strIngredient17 != null) && (recipe.strIngredient17 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient17} - {recipe.strMeasure17} </Text>:<></>}  
            {((recipe.strIngredient18 != null) && (recipe.strIngredient18 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient18} - {recipe.strMeasure18} </Text>:<></>}  
            {((recipe.strIngredient19 != null) && (recipe.strIngredient19 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient19} - {recipe.strMeasure19} </Text>:<></>}  
            {((recipe.strIngredient20 != null) && (recipe.strIngredient20 != "") ) ? <Text theme={{colors: 'black'}}> {recipe.strIngredient20} - {recipe.strMeasure20} </Text>:<></>}    

            <Text variant="labelMedium">
            {"\n"}Instructions:{"\n"}
            </Text>
            <Text  theme={{colors: 'black'}} variant="bodySmall">
                {recipe.strInstructions}
            </Text>
            

        </ScrollView>
    </Modal>

    );

    return(
        <PaperProvider>
        <View>
            <br/>
            <Text  theme={{colors: 'black'}} variant="titleMedium">Example: Fish, Pasta, Pork, etc</Text>
            <br/>
            <Searchbar
                placeholder="Search"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                onSubmitEditing={getMealByName}
            />
            <br/>       
            <>
                {listMealsByName}
            </>
            <Portal>
                {recipesList}
            </Portal>
        </View>
        </PaperProvider>
    );
};