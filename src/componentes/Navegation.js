import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import LucesScreen from "./screen/Luces/LucesScreen";
import SETTINGSCREEN from "./screen/Setting/SETTINGSCREEN";
import UserScreens from "./screen/User/UserScreens";
import PUERTASCREEN from "./screen/Puertas/PUERTASCREEN";
import UsuarioDetalle from "./screen/User/UsuarioDetalle";
import P2Login from "./screen/Login/P2Login";
import UserEdit from "./screen/User/UserEdit";
import UserNew from "./screen/User/UserNew";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Usuarios" component={UserScreens} />
			<Stack.Screen name="Detalles" component={UsuarioDetalle} />
			<Stack.Screen name="nuevouser" component={UserNew} />
			<Stack.Screen name="EditarUser" component={UserEdit} />
		</Stack.Navigator>
	);
}

function Mytabs() {
	return (
		<Tab.Navigator
			initialRouteName="menu"
			screenOptions={{ tabBarActiveTintColor: "blue" }}
		>
			<Tab.Screen
				options={{
					tabBarBadge: "2",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
				name="menu"
				component={P2Login}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="lightbulb"
							size={size}
							color={color}
						/>
					),
				}}
				name="luces"
				component={LucesScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="door" size={size} color={color} />
					),
				}}
				name="puertas"
				component={PUERTASCREEN}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account-supervisor-circle"
							size={size}
							color={color}
						/>
					),
				}}
				name="user"
				component={MyStack}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cog" size={size} color={color} />
					),
				}}
				name="Ajustes"
				component={SETTINGSCREEN}
			/>
		</Tab.Navigator>
	);
}

export default function Navegation() {
	return <Mytabs />;
}
