import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

const Stack = createStackNavigator();
const episodeSpan = '. Episode';

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Movies"
          component={Movies}
          options={{ title: 'Movies' }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={({ route }) => ({
            title: route.params.episode_number
              ? route.params.episode_number.concat(episodeSpan)
              : 'Error 404 - not found',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
