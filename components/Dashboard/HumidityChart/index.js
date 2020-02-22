import React from 'react'
import { StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryLabel } from "victory-native";

export default function HumidityChart(props) {
    
    const {weatherData} = props;

	const humidityData = [
		{ quarter: 0, humidity: weatherData.current.weather.hu }
	];

    return (
        <View style={styles.container} >
		  <VictoryBar horizontal barWidth={30} width={300} height={50}
			animate={{ duration: 2000, onLoad: { duration: 1000 }}}
			domain={{x: [0, 1], y: [0, 100]}}
			labels={({ datum }) => datum.humidity + '%'}
			padding={{left: 10, right: 55, bottom: 20}}
			style={{ labels: { fill: "white", fontSize: 18}, data: { fill: "#50CBF5" } }}
			labelComponent={<VictoryLabel dy={30} y={0}/>} 
			data={humidityData} x="quarter" y="humidity" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});