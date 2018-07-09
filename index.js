// Import a Library to help create a component
import React from 'react';
import { Text,AppRegistry } from 'react-native';

// Create a component
const App = () => (<Text> Create A component </Text>)

// Render it to device
AppRegistry.registerComponent('album', () => App);