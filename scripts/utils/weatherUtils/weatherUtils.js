export const getWeatherBackground = (weatherCode) => {
  // Weather codes based on WMO standards used by Open-Meteo API
  switch (weatherCode) {
    case 0: // Clear sky
      return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1170&q=80";
    case 1: // Mainly clear
    case 2: // Partly cloudy
    case 3: // Overcast
      return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1170&q=80";
    case 45: // Fog
    case 48: // Depositing rime fog
      return "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1170&q=80";
    case 51: // Light drizzle
    case 53: // Moderate drizzle
    case 55: // Dense drizzle
    case 56: // Light freezing drizzle
    case 57: // Dense freezing drizzle
    case 61: // Slight rain
    case 63: // Moderate rain
    case 65: // Heavy rain
    case 66: // Light freezing rain
    case 67: // Heavy freezing rain
      return "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1170&q=80";
    case 71: // Slight snow fall
    case 73: // Moderate snow fall
    case 75: // Heavy snow fall
    case 77: // Snow grains
      return "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1170&q=80";
    case 80: // Slight rain showers
    case 81: // Moderate rain showers
    case 82: // Violent rain showers
      return "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1170&q=80";
    case 85: // Slight snow showers
    case 86: // Heavy snow showers
      return "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1170&q=80";
    case 95: // Slight or moderate thunderstorm
    case 96: // Thunderstorm with slight hail
    case 99: // Thunderstorm with heavy hail
      return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1171&q=80";
    default:
      return "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1170&q=80"; // Default background
  }
};