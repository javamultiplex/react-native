import { useState, useEffect } from 'react';
import {
	Accuracy,
	watchPositionAsync,
	requestPermissionsAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
	const [err, setErr] = useState(null);
	useEffect(() => {
		let subscriber;
		const startWatching = async () => {
			try {
				const { granted } = await requestPermissionsAsync();
				if (!granted) {
					throw new Error('Location permission not granted!');
				}
				subscriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				);
			} catch (err) {
				setErr(err);
			}
		};

		if (shouldTrack) {
			startWatching();
		} else {
			//stop watching
			if (subscriber) {
				subscriber.remove();
			}
			subscriber = null;
		}
		return () => {
			//stop watching
			if (subscriber) {
				subscriber.remove();
			}
		};
	}, [shouldTrack, callback]);

	return [err];
};
