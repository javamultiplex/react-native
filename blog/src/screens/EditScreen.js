import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogpost = state.find(
		blogpost => blogpost.id === navigation.getParam('id')
	);
	return (
		<BlogPostForm
			initialValues={{ title: blogpost.title, content: blogpost.content }}
			onSubmit={(title, content) => console.log(title, content)}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
