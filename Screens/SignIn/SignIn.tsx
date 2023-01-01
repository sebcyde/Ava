import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';

const SignIn = ({ navigation }) => {
	const [Password, setPassword] = useState('');

	const Submission = (event: any) => {};

	return (
		<SafeAreaView>
			<View style={styles.PageContainer}>
				<TextInput
					style={styles.PasswordInput}
					onChangeText={(e) => setPassword(e)}
					value={Password}
				/>
				<Button onPress={() => navigation.navigate('dashboard')}>
					Submit Password
				</Button>

				<Text style={styles.Password}>{Password}</Text>
			</View>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	PageContainer: {
		height: '100%',
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
	PasswordInput: {
		borderWidth: 2,
		borderColor: 'gray',
		color: 'gray',
		width: '80%',
		height: 40,
		padding: 20,
		marginBottom: 30,
		borderRadius: 10,
	},
	Password: {
		color: 'white',
	},
});
