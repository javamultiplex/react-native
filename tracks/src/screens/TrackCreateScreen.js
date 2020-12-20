import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';
import Map from '../components/Map';

const TrackCreateScreen = ({ isFocused }) => {
	const { addLocation } = useContext(LocationContext);
	const [err] = useLocation(isFocused, location => addLocation(location));
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h2>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location services.</Text> : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
