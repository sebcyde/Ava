import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavTabs from '../../Components/Global/NavTabs';

const Settings = () => {
	return (
		<SafeAreaView>
			<View style={styles.PageContainer}>
				<Text>Dashboard</Text>
				<Button onPress={() => navigation.navigate('signin')}>
					To Sign In
				</Button>
				<NavTabs />
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	PageContainer: {
		height: '100%',
		backgroundColor: 'black',
	},
});
