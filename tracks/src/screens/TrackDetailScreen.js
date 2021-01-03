import React, { useContext } from 'react';
import { Context as TrackContext } from '../contexts/TrackContext';
import { Text, StyleSheet } from 'react-native';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam('_id');
	const track = state.find(t => t._id === _id);
	return <Text style={{ fontSize: 48 }}>{track.name}</Text>;
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
