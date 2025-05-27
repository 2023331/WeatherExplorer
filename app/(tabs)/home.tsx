import * as Location from "expo-location";
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WeatherAnimation from "../../components/WeatherAnimation";
import { getWeatherBackground } from "../../utils/weatherUtils";

export default function HomeScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1170&q=80");
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${loc.coords.latitude}&longitude=${loc.coords.longitude}&current_weather=true`
      );
      const data = await response.json();
      setWeather(data.current_weather);
      setBackgroundImage(getWeatherBackground(data.current_weather.weathercode));
      
      // Set up notifications
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      // Check for weather alerts
      checkWeatherAlerts(data.current_weather);

      // Fetch air quality data
      fetchAirQuality(loc.coords.latitude, loc.coords.longitude);

      setLoading(false);
    })();
  }, []);

  const checkWeatherAlerts = async (weatherData) => {
    if (weatherData.temperature > 30) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Extreme Weather Alert",
          body: "High temperature detected. Stay hydrated!",
        },
        trigger: null,
      });
    }
  };

  const fetchAirQuality = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openaq.org/v2/latest?coordinates=${latitude},${longitude}`
      );
      const data = await response.json();
      setAirQuality(data.results[0]);
    } catch (error) {
      console.error('Failed to fetch air quality data', error);
    }
  };

  const getRecommendations = () => {
    if (!weather) return null;

    if (weather.temperature > 25) {
      return "It's hot! Wear light clothing and stay hydrated.";
    } else if (weather.temperature < 10) {
      return "It's cold! Bundle up with warm layers.";
    } else {
      return "Pleasant weather. Enjoy outdoor activities!";
    }
  };

  const shareWeather = async () => {
    try {
      await Share.share({
        message: `The current temperature is ${weather.temperature}°C with wind speed of ${weather.windspeed} km/h.`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to WeatherExplorer ☁️</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : weather ? (
          <>
            <WeatherAnimation weatherCode={weather.weathercode} />
            <Text style={styles.info}>
              📍 Your location: {location?.coords.latitude.toFixed(2)}, {location?.coords.longitude.toFixed(2)}
            </Text>
            <Text style={styles.info}>🌡️ Temperature: {weather.temperature}°C</Text>
            <Text style={styles.info}>💨 Wind speed: {weather.windspeed} km/h</Text>
            {airQuality && (
              <Text style={styles.info}>
                Air Quality (PM2.5): {airQuality.measurements.find(m => m.parameter === 'pm25').value} µg/m³
              </Text>
            )}
            <Text style={styles.recommendation}>{getRecommendations()}</Text>
          </>
        ) : (
          <Text style={styles.info}>Could not load weather data.</Text>
        )}

        <Text style={styles.motivation}>
          "No matter the weather, always bring your own sunshine." ☀️
        </Text>

        <TouchableOpacity onPress={shareWeather} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // ... existing styles ...
  recommendation: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  shareButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});