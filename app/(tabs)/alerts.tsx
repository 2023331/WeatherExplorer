import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
    setupNotifications();
  }, []);

  const fetchAlerts = async () => {
    // Fetch alerts from a weather API
    // This is a placeholder, replace with actual API call
    const mockAlerts = [
      { id: '1', title: 'Severe Thunderstorm Warning', description: 'Possible hail and strong winds' },
      { id: '2', title: 'Flash Flood Watch', description: 'Heavy rainfall expected' },
    ];
    setAlerts(mockAlerts);
  };

  const setupNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission not granted for notifications');
      return;
    }

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
  };

  const renderAlert = ({ item }) => (
    <View style={styles.alertItem}>
      <Text style={styles.alertTitle}>{item.title}</Text>
      <Text style={styles.alertDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather Alerts</Text>
      <FlatList
        data={alerts}
        renderItem={renderAlert}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  alertItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  alertDescription: {
    fontSize: 16,
    color: '#333',
  },
});
