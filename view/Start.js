import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Stack, Button } from "@react-native-material/core";

export default function Start({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("../img/bgk.png")} />
      <Text style={{color:"#fff",fontSize:25, textAlign:"center", margin:15}}>Coffe so good, your taste  buds will love it</Text>
      <Text style={{color:"#5f5f5f",fontSize:20, textAlign:"center", margin:15}}>The best grain, the finest roast, the powerful flavor</Text>
      <Button title="START" style={{width:500, marginTop:40}} onPress={()=>navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
