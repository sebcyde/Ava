import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screens/Dashboard/Dashboard';
import Settings from './Screens/Settings/Settings';
import Portfolio from './Screens/Portfolio/Portfolio';
import SignIn from './Screens/SignIn/SignIn';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="signin" component={SignIn} />
				<Stack.Screen name="dashboard" component={Dashboard} />
				<Stack.Screen name="portfolio" component={Portfolio} />
				<Stack.Screen name="settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
