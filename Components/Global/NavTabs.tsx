import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';

const NavTabs = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.BottomTabContainer}>
			<Icon
				name="home"
				type="material"
				color="green"
				style={styles.TabIcon}
				size={35}
				onPress={() => navigation.navigate('dashboard')}
			/>
			<Icon
				name="search"
				type="material"
				color="green"
				style={styles.TabIcon}
				size={35}
			/>
			<Icon
				name="settings"
				type="material"
				color="green"
				style={styles.TabIcon}
				size={35}
				onPress={() => navigation.navigate('settings')}
			/>
		</View>
	);
};

export default NavTabs;

const styles = StyleSheet.create({
	BottomTabContainer: {
		position: 'absolute',
		height: 70,
		width: '100%',
		backgroundColor: 'black',
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderWidth: 2,
		borderTopColor: 'green',
	},
	TabIcon: {
		height: 40,
		width: 40,
		fontSize: 30,
	},
});
