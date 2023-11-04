import * as React from "react";
import { View , StyleSheet, ScrollView } from "react-native";
import { List, Avatar, Card, Text, Button, Portal, Modal, PaperProvider, Divider } from 'react-native-paper';

export function Category(params) {
    const [expanded, setExpanded] = React.useState(true);
    const [categories, setCategories] = React.useState([]);
    const [meals, setMeals] = React.useState([]);
    const [mealById, setMealById] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => {setModalVisible(false); setMealById([]);};

    React.useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=> setCategories(data.categories)).catch((error) => {
            console.log(error);
        })
    })
    
    const searchByCategory = (categoria) => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoria)
        .then(res=>res.json())
        .then(data=> setMeals(data.meals)).catch((error) => {
            console.log(error);
        })
        
        setExpanded(false);
    }
    
    const getMealById = (id) => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        .then(res=>res.json())
        .then(data=> setMealById(data.meals)).catch((error) => {
            console.log(error);
        })

        console.log('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        showModal();
        
    }


    const styles = StyleSheet.create({
        card: {
          marginBottom: 10,  
          marginLeft: 5,
          marginRight: 5
        },

        cardImage: {
         margin: 10
        },

        modal: {
            backgroundColor: "white",
            padding: 20
        },  

        instructions: {
            textAlign: "center",
            lineHeight:20
        }
      });

    const listCategories = categories.map((category) => <List.Item title={category.strCategory} key={category.idCategory} onPress={() => searchByCategory(category.strCategory)}/>);
    
   

    const listMealId = mealById.map((meal) => 
        <Modal visible={modalVisible} contentContainerStyle={styles.modal} onDismiss={hideModal} key={meal.idMeal} dismissableBackButton={true}>
            <ScrollView>

            <Text variant="labelMedium">
                Ingredients:{"\n"}
            </Text>
            
            {((meal.strIngredient1 != null) && ( meal.strIngredient1 != "") ) ?  <Text> {meal.strIngredient1} - {meal.strMeasure1}</Text>:<></>}  
            {((meal.strIngredient2 != null) && ( meal.strIngredient2 != "") ) ?  <Text> {meal.strIngredient2} - {meal.strMeasure2}</Text>:<></>}  
            {((meal.strIngredient3 != null) && ( meal.strIngredient3 != "") ) ?  <Text> {meal.strIngredient3} - {meal.strMeasure3}</Text>:<></>}  
            {((meal.strIngredient4 != null) && ( meal.strIngredient4 != "") ) ?  <Text> {meal.strIngredient4} - {meal.strMeasure4}</Text>:<></>}  
            {((meal.strIngredient5 != null) && ( meal.strIngredient5 != "") ) ?  <Text> {meal.strIngredient5} - {meal.strMeasure5}</Text>:<></>}  
            {((meal.strIngredient6 != null) && ( meal.strIngredient6 != "") ) ?  <Text> {meal.strIngredient6} - {meal.strMeasure6}</Text>:<></>}  
            {((meal.strIngredient7 != null) && ( meal.strIngredient7 != "") ) ?  <Text> {meal.strIngredient7} - {meal.strMeasure7}</Text>:<></>}  
            {((meal.strIngredient8 != null) && ( meal.strIngredient8 != "") ) ?  <Text> {meal.strIngredient8} - {meal.strMeasure8}</Text>:<></>}  
            {((meal.strIngredient9 != null) && ( meal.strIngredient9 != "") ) ?  <Text> {meal.strIngredient9} - {meal.strMeasure9}</Text>:<></>}  
            {((meal.strIngredient10 != null) && (meal.strIngredient10 != "") ) ? <Text> {meal.strIngredient10} - {meal.strMeasure10} </Text>:<></>}  
            {((meal.strIngredient11 != null) && (meal.strIngredient11 != "") ) ? <Text> {meal.strIngredient11} - {meal.strMeasure11} </Text>:<></>}  
            {((meal.strIngredient12 != null) && (meal.strIngredient12 != "") ) ? <Text> {meal.strIngredient12} - {meal.strMeasure12} </Text>:<></>}  
            {((meal.strIngredient13 != null) && (meal.strIngredient13 != "") ) ? <Text> {meal.strIngredient13} - {meal.strMeasure13} </Text>:<></>}  
            {((meal.strIngredient14 != null) && (meal.strIngredient14 != "") ) ? <Text> {meal.strIngredient14} - {meal.strMeasure14} </Text>:<></>}  
            {((meal.strIngredient15 != null) && (meal.strIngredient15 != "") ) ? <Text> {meal.strIngredient15} - {meal.strMeasure15} </Text>:<></>}  
            {((meal.strIngredient16 != null) && (meal.strIngredient16 != "") ) ? <Text> {meal.strIngredient16} - {meal.strMeasure16} </Text>:<></>}  
            {((meal.strIngredient17 != null) && (meal.strIngredient17 != "") ) ? <Text> {meal.strIngredient17} - {meal.strMeasure17} </Text>:<></>}  
            {((meal.strIngredient18 != null) && (meal.strIngredient18 != "") ) ? <Text> {meal.strIngredient18} - {meal.strMeasure18} </Text>:<></>}  
            {((meal.strIngredient19 != null) && (meal.strIngredient19 != "") ) ? <Text> {meal.strIngredient19} - {meal.strMeasure19} </Text>:<></>}  
            {((meal.strIngredient20 != null) && (meal.strIngredient20 != "") ) ? <Text> {meal.strIngredient20} - {meal.strMeasure20} </Text>:<></>}    

            <Text variant="labelMedium">
            {"\n"}Instructions:{"\n"}
            </Text>
            <Text style={styles.instructions} variant="bodySmall">
                {meal.strInstructions}
            </Text>
            </ScrollView>

        </Modal>

    )

    const listMeals = meals.map((meal) =>   
    <Card key={meal.idMeal} style={styles.card}>
    {/* <Card.Title title={meal.strMeal}/> */}
    
    <Card.Content>
        <Text variant="titleLarge">{meal.strMeal}</Text>
        <Text variant="bodyMedium">{meal.idMeal}</Text>
    </Card.Content>
    
    <Card.Cover source={{ uri: meal.strMealThumb }} style={styles.cardImage}/>
    
    <Card.Actions>
        <Button mode="contained" onPress={()=>getMealById(meal.idMeal)}>Ver receta</Button>
    </Card.Actions>
    </Card>
    );

    const handlePress = () => setExpanded(!expanded);


  
    return (
        <PaperProvider>
        <View>

        <List.Section title="Selecciona la categoria a buscar">  
            <List.Accordion
                title="Categorias"
                left={props => <List.Icon {...props} icon="food" />}
                expanded={expanded}
                onPress={handlePress}>
                {listCategories}
            </List.Accordion>
        </List.Section>
        <ScrollView>
        {listMeals}
        </ScrollView>
        <Portal>

            {listMealId}
        </Portal>

        </View>
        </PaperProvider>
    );
}