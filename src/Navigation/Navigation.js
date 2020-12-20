import * as React from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import QrCodeScanner from '../Pages/QrCodeScanner/QrCodeScanner.page';
import QrCodeShow from '../Pages/QrCodeShow/QrCodeShow.page';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Colors } from '../Utils/Colors';

const Stack = createStackNavigator();
function Navigation() {
  //console.warn("dwd",JSON.stringify(navigation))
  return (
   
      <Stack.Navigator initialRouteName="QrCodeScanner">
        <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} 
        options={{
          headerShown:false
        
        }}
        />
        <Stack.Screen name="QrCodeShow" component={QrCodeShow} 
        options={({ navigation, route }) => ({
          headerTitle:null,
          headerBackTitle:"Geri",
         
          headerRight: () => (
           <TouchableOpacity 
           style={{marginHorizontal:8}}
           onPress={() =>navigation.goBack()}
         >
           <MaterialCommunityIcons name={"qrcode-scan"} size={30} color={Colors.BLACK} />
         </TouchableOpacity>
             ),
             headerLeft:null

        }
        )}
        
        />
      </Stack.Navigator>
   
  );
}

export default Navigation;