import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

export default function WeatherAnimation({ weatherCode }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withRepeat(
            withTiming(10, { duration: 1000 }),
            -1,
            true
          ),
        },
      ],
    };
  });

  const renderAnimation = () => {
    switch (weatherCode) {
      case 0: // Clear sky
        return <Animated.Text style={[styles.icon, animatedStyle]}>☀️</Animated.Text>;
      case 1: // Mainly clear
        return <Animated.Text style={[styles.icon, animatedStyle]}>🌤️</Animated.Text>;
      // Add more cases for different weather codes
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderAnimation()}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  icon: {
    fontSize: 50,
  },
});