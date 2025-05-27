### Required Software
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) (v8.0.0 or higher) or [Yarn](https://yarnpkg.com/) (v1.22.0 or higher)
- [Git](https://git-scm.com/) (v2.0.0 or higher)

# Welcome to Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### Development Environment
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
```bash
npm install -g @expo/cli
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/2023331/WeatherExplorer.git
cd WeatherExplorer
```

### 2. Install Dependencies
```bash
# Using npm
npm install
# Or using yarn
yarn install
```

### 3. Verify Installation
```bash
# Check if all dependencies are installed correctly
npm list --depth=0
```

### 4. Start Development Server
```bash
# Start the Expo development server
npx expo start

# Alternative commands
npm start
# or
yarn start
```

### 5. Run on Device/Simulator

#### Option A: Physical Device (Recommended for beginners)
1. Install [Expo Go](https://expo.dev/client) on your mobile device
2. Scan the QR code displayed in your terminal or browser
3. The app will load automatically


This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## 📱 Features

- 🔍 **Smart City Search**: Intelligent city search with autocomplete and geographic coordinates
- 🌡️ **Real-time Weather**: Current temperature, wind speed, and weather conditions
- 🖼️ **Dynamic Backgrounds**: Weather-appropriate background images that change based on conditions
- 📱 **Cross-Platform**: Seamless experience on both iOS and Android
- ⚡ **Fast Performance**: Optimized API calls with proper error handling and loading states
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript, JavaScript 
- **Navigation**: Expo Router (file-based routing)
- **APIs**: 
  - [Open-Meteo Weather API](https://open-meteo.com/en/docs)
  - [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- **State Management**: React Hooks (useState, useCallback)
- **Styling**: React Native StyleSheet

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
```
__tests__/
├── components/
│   ├── CitySearch.test.tsx
│   └── WeatherCard.test.tsx
├── utils/
│   ├── weatherUtils.test.ts
│   └── errorHandler.test.ts
└── screens/
    └── ExploreScreen.test.tsx
```

## 🐛 Troubleshooting

### Common Issues

#### Metro Bundler Issues
```bash
# Clear Metro cache
npx expo start --clear

# Reset Metro cache completely
npx expo start --clear --reset-cache
```
#### TypeScript Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Update TypeScript definitions
npm update @types/react @types/react-native
```

### Performance Issues
- **Slow API responses**: Check your internet connection
- **App crashes**: Check the console for error messages
- **Memory issues**: Restart the development server

## 📚 API Documentation

### Weather API Endpoints
- **Weather Data**: `https://api.open-meteo.com/v1/forecast`
- **Geocoding**: `https://geocoding-api.open-meteo.com/v1/search`

### Roles and Responsibilities
#### Project Manager/Documentation Specialist: Mary
- **Responsibilities**: Manage project goals, timelines, worked with team members to ensure accurate documentation. Create and maintain comprehensive documentation, including project structure, API documentation, and testing strategies. 

#### Frontend Developer(UI/UX): Abhinav
- **Responsibilities**: Develop the frontend of the application, including the user interface, navigation, and data fetching. Implement the weather data fetching and display logic. Test the frontend components and ensure responsiveness.

#### Backend Developer: Jenny
- **Responsibilities**: Develop the backend of the application, including the API endpoints and data fetching. Implement the weather data fetching and display logic. Test the backend API endpoints and ensure responsiveness.

### QA Tester: Steven
- **Responsibilities**: Test the application thoroughly, including frontend and backend components. Ensure the application meets all requirements and performs as expected. Provide feedback to the development team for improvements incase of bug issues
