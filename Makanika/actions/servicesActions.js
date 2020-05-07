import { GET_SERVICES } from './actionTypes';

const services = [
	{
		id: 1,
		name: 'Mechanic',
		icon: require('../assets/mechanic.png'),
		title: 'Mechanic',
	},
	{
		id: 2,
		name: 'Breakdown',
		icon: require('../assets/towing.png'),
		title: 'Breakdown',
	},
	{
		id: 3,
		name: 'RideForMe',
		icon: require('../assets/driver.png'),
		title: 'Ride For Me'
	},
	{
		id: 4,
		name: 'ScheduleService',
		icon: require('../assets/schedule.png'),
		title: 'Schedule Service'
	}
]


export const getServices = () => dispatch => {
	dispatch({
        type: GET_SERVICES,
        payload: services
    })
};