import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as LocationContext } from '../contexts/LocationContext';
import {
	requestPermissionsAsync,
	watchPositionAsync,
	Accuracy,
} from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);
	const { addLocation } = useContext(LocationContext);

	const startWatching = async () => {
		try {
			const { granted } = await requestPermissionsAsync();
			if (!granted) {
				throw new Error('Location permission not granted!');
			}
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				location => {
					addLocation(location);
				}
			);
		} catch (err) {
			setErr(err);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services.</Text> : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
