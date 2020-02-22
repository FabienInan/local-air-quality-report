import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Card ({ children }) {
    return (
        <View style={styles.card}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
	card: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 8,
		marginBottom: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: '#404146'
	},
});
  