import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importar screen Principal

const Stack = createStackNavigator();
import P2Login from "./Login/P2Login";
import Navegation from "../Navegation";
import CreateAccount from "./Login/CreateAccount";

function MyStackLogin () {
    return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={P2Login}/>
        <Stack.Screen options={{headerShown:false}} name="crearcuenta" component={CreateAccount}/>
        <Stack.Screen options={{headerShown:false}} name="Dash" component={Navegation}/>
       </Stack.Navigator>
    )
}

export default function Navegation2 () {
    return(
        <NavigationContainer>
         <MyStackLogin/>
        </NavigationContainer>
    )
}