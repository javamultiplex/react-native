import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);
	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={title => setTitle(title)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={content => setContent(content)}
			/>
			<Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

const styles = StyleSheet.create({
	label: {
		fontSize: 20,
		marginLeft: 5,
	},
	input: {
		fontSize: 18,
		borderWidth: 2,
		borderColor: 'black',
		padding: 5,
		margin: 5,
	},
});

export default BlogPostForm;
