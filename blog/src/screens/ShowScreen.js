import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const blogpost = state.find(
		blogpost => blogpost.id === navigation.getParam('id')
	);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blogpost.title}</Text>
			<Text style={styles.content}>{blogpost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}
			>
				<EvilIcons name='pencil' size={35} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 5,
		textDecorationLine: 'underline',
	},
	content: {
		fontSize: 16,
	},
	container: {
		borderWidth: 2,
		borderColor: 'gray',
		padding: 30,
		margin: 10,
	},
});

export default ShowScreen;
