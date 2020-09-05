import React, { Component } from 'react';
import Menu from './MenuComponent';

import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const MenuNavigator = createStackNavigator();
function MenuNavigatorScreen(){
    return(
        <MenuNavigator.Navigator
        InitialRoutename='Menu'
        screenOptions={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"            
            }
        }}>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail"}}
            />
        </MenuNavigator.Navigator>
    );
}
const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen(){
    return(
        <HomeNavigator.Navigator
        
        screenOptions={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"            
            }
        }}>
            <MenuNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}
const ContactNavigator = createStackNavigator();
function ContactNavigatorScreen(){
    return(
        <ContactNavigator.Navigator
        
        screenOptions={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"            
            }
        }}>
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
            />
        </ContactNavigator.Navigator>
    );
}

const AboutNavigator = createStackNavigator();
function AboutNavigatorScreen(){
    return(
        <AboutNavigator.Navigator
        
        screenOptions={{
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"            
            }
        }}>
            <AboutNavigator.Screen
                name="About"
                component={About}
            />
        </AboutNavigator.Navigator>
    );
}
const Drawer=createDrawerNavigator();

function MainNavigator({ navigation }) {
    return(

        <Drawer.Navigator drawerStyle={{
                backgroundColor: '#D1C4E9'
                }} >   
          <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
          <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
          <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
          <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
          
        </Drawer.Navigator>
        

    );
}

class Main extends Component {
      

  render() {
 
    return (
        <NavigationContainer>
            <MainNavigator/>           
        </NavigationContainer>
    );
  }
}
  
export default Main;