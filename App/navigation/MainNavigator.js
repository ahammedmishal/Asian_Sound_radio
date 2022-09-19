import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './DrawerNavigator';

const Stack = createNativeStackNavigator();
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
};

export default function MainNavigator() {
    return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen
                        name="MyDrawer"
                        component={MyDrawer}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}
