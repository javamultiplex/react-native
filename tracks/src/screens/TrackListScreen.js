import React, { useContext } from 'react';
import { Context as TrackContext } from '../contexts/TrackContext';
import { NavigationEvents } from 'react-navigation';
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<Text style={{ fontSize: 47 }}>TrackListScreen</Text>
			<FlatList
				data={state}
				keyExtractor={item => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('TrackDetail', { _id: item._id })
							}
						>
							<ListItem>
								<ListItem.Content>
									<ListItem.Title>{item.name}</ListItem.Title>
								</ListItem.Content>
								<ListItem.Chevron />
							</ListItem>
						</TouchableOpacity>
					);
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
