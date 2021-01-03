import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Context as LocationContext } from '../contexts/LocationContext';
import MapView, { Polyline, Circle } from 'react-native-maps';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
	}

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Circle
				radius={30}
				center={currentLocation.coords}
				strokeColor='rgba(158,158,255, 1.0)'
				fillColor='rgba(158,158,255, 0.3)'
			/>
			<Polyline coordinates={locations.map(location => location.coords)} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;
