import * as React from "react";
import { View , StyleSheet, ScrollView } from "react-native";
import { List, Avatar, Card, Text, Button, Portal, Modal, PaperProvider, Divider, Searchbar } from 'react-native-paper';

export function Name(){

    const [names, setNames] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const Meals = (name) => {
        name = searchQuery;
        if (name != '') {
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name)
            .then(res => res.json())
            .then(data => setNames(data.meals)).catch((error) => {
                console.log(error);
            })
        }
    }    
    Meals(searchQuery);
    console.log(names);

    const listMeals = names.map((meal) => {        
        console.log(meal.strMeal);
        <Card>
            {/* <Card.Cover source={{ uri: '{meal.strMeal}' }}/>
            <Card.Title title={meal.strMeal}/>
            <Card.Content>
                <Text variant="bodySmall">{meal.strStructions}</Text>
            </Card.Content> */}
        </Card>   
    })

    return(
        <PaperProvider>
            <View>
                    <br/>
                    <Text  theme={{colors: 'black'}} variant="titleMedium">Example: Fish, Pasta, Pork, etc</Text>
                    <br/>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery} 
                    />
                    <br/>
                    {/* <ScrollView>
                        {listMeals}
                    </ScrollView> */}
                    <Portal>
                        {listMeals}
                    </Portal>
            </View>
        </PaperProvider>
    );


}