import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/base';
import NavTabs from '../../Components/Global/NavTabs';

const Dashboard = ({ navigation }) => {
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

export default Dashboard;

const styles = StyleSheet.create({
	PageContainer: {
		height: '100%',
		backgroundColor: 'black',
	},
});
