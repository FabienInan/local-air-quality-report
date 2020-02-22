import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Row from '../../Layout/Row';
import Column from '../../Layout/Column';

export default function AirQuality(props) {

	const {weatherData} = props;
	const aqiIndexJudgmentArray = getAqiIndexJudgment(weatherData.current.pollution.aqius);

	return (
		<Row style={styles.aqiIndex}>
			<Column>
				<Text style={styles.aqiIndexRate}>{weatherData.current.pollution.aqius}</Text>
			</Column>
			<Column>
				<Text style={[styles.aqiIndexJudgment, {color: aqiIndexJudgmentArray[1]}]}>
					{aqiIndexJudgmentArray[0]}
				</Text>
			</Column>
		</Row>
	);
}

const getAqiIndexJudgment = function (aqiIndex) {
	if (aqiIndex < 50) {
		return ['Good', 'green'];
	}
	if (aqiIndex < 100) {
		return ['Moderate', 'yellow'];
	}
	if (aqiIndex < 150) {
		return ['Unhealthy for Sensitive Groups', 'orange'];
	}
	if (aqiIndex < 200) {
		return ['Unhealthy', 'red'];
	}
	if (aqiIndex < 300) {
		return ['Very Unhealthy', 'purple'];
	}
	return ['Hazardous', 'maroon'];
}

const styles = StyleSheet.create({
	aqiIndex: {
		marginTop: 200,
	},
	aqiIndexRate: {
		marginLeft: 100,
		fontSize: 20,
		color: 'white',
	},
	aqiIndexJudgment: {
		fontSize: 20,
	}
});
