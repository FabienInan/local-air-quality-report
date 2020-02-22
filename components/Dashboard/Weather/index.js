import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';

export default function Weather(props) {

	const {weatherData} = props;

	return (
		<Row>
			<Column>
				<Text style={styles.location}>{weatherData.city}</Text>
				<Text style={styles.location}>{weatherData.state}</Text>
				<Text style={styles.location}>{weatherData.country}</Text>
			</Column>
			<Column>
				<Text style={styles.temperature}>{weatherData.current.weather.tp}°C</Text>
			</Column>
		</Row>
	);
}

const styles = StyleSheet.create({
	location: {
		fontSize: 20,
		color: 'white',
	},
	temperature: {
		fontSize: 28,
		top: 20,
		textAlign : 'center',
		color: 'white',
	}
});
  