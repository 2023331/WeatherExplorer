import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

export default function HistoryScreen() {
  const [historicalData, setHistoricalData] = useState(null);

  useEffect(() => {
    // Fetch historical data here
    // setHistoricalData(fetchedData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historical Weather Data</Text>
      {historicalData && (
        <LineChart
          data={historicalData}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});