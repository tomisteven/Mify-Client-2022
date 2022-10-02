import {JosefinSans_400Regular} from '@expo-google-fonts/josefin-sans';
import {Jost_400Regular} from "@expo-google-fonts/jost"
import { JosefinSlab_400Regular} from "@expo-google-fonts/josefin-slab"

import * as SplashScreen from 'expo-splash-screen';
import { Koulen_400Regular} from "@expo-google-fonts/koulen"
import * as Font from 'expo-font';



export const loaderFonts = () => {
    return Font.loadAsync({
        'josefin': JosefinSans_400Regular,
        'jost': Jost_400Regular,
        'slab' : JosefinSlab_400Regular,
        'koulen' : Koulen_400Regular
        
      }).then(() => {
        SplashScreen.hideAsync();
      }).catch(() => {
        SplashScreen.preventAutoHideAsync();
      }).done()
}


/*     let [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
        Jost_400Regular,
        JosefinSlab_400Regular,
        Koulen_400Regular,
    }); */