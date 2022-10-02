import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// componentes
import Home from "./screens/home/Home"
import Months from './screens/bills/Months';
import Charts from './screens/chart/Chart';
import ListMesesGasto from './screens/bills/ListGastosMes/ListMesesGasto';

const Stack = createNativeStackNavigator();


function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="inicio" options={{
              headerShown: false
            }} component={Home} />
            <Stack.Screen name="charts" options={{
                    headerShown: false
                  }} component={Charts} />
            <Stack.Screen name="bills" options={{
                    headerShown: false
                  }} component={Months} />
                  <Stack.Screen name="list gastos" options={{
                    headerShown: false
                  }} component={ListMesesGasto} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
