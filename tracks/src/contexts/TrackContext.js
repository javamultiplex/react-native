import createDataContext from './createDataContext';

const TrackReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
	console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
	TrackReducer,
	{ fetchTracks, createTrack },
	[]
);
