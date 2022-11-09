import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Stack, Button, TextInput } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { FlatGrid } from 'react-native-super-grid';
import { useState } from 'react';
export default function Home() {
    const [items, setItems] = useState([
        { img:require("../img/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../img/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../img/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../img/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
        { img:require("../img/bgk.png"),descrip:"with chocolate",name: 'Capuchino',price:22.22},
      ]);
  return (
    <View style={styles.container}>
        <View>
            <TextInput  label="Search coffee" style={{color:"#1c1c1c", width:350}} leading={props => <Ionicons name="search" size={24} color="black" backgroundColor="#1c1c1c" />}/>
        </View>
        <View style={{display:"flex", flexDirection:"row"}}>
            <Button title="capuchino" style={{width:130, marginTop:20,backgroundColor:"#c67c4e"}}/>
            <Button title="machiato" style={{width:130, marginTop:20, marginLeft:20, marginRight:20,backgroundColor:"#c67c4e"}}/>
            <Button title="late" style={{width:90, marginTop:20,backgroundColor:"#c67c4e"}}/>
        </View>
        {/* <ScrollView style={{height:400,maxHeight:400,marginTop:40}}>
            <View style={{marginTop:20, display:"flex",flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
                <View>
                    <Image style={{width:150, height:150, borderRadius:10}} source={require("../img/bgk.png")} />
                    <Text style={{fontSize:16, fontWeight:"bold"}}>Capuchino</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>with chocolate</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>$44.44</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../img/btnadd.png")} />
                    </View>
                    
                </View>
                <View>
                    <Image style={{width:150, height:150, borderRadius:10}} source={require("../img/bgk.png")} />
                    <Text style={{fontSize:16, fontWeight:"bold"}}>Capuchino</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>with chocolate</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>$44.44</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../img/btnadd.png")} />
                    </View>
                    
                </View>
            </View>

            <View style={{marginTop:20, display:"flex",flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
                <View>
                    <Image style={{width:150, height:150, borderRadius:10}} source={require("../img/bgk.png")} />
                    <Text style={{fontSize:16, fontWeight:"bold"}}>Capuchino</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>with chocolate</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>$44.44</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../img/btnadd.png")} />
                    </View>
                    
                </View>
                <View>
                    <Image style={{width:150, height:150, borderRadius:10}} source={require("../img/bgk.png")} />
                    <Text style={{fontSize:16, fontWeight:"bold"}}>Capuchino</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>with chocolate</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>$44.44</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../img/btnadd.png")} />
                    </View>
                    
                </View>
            </View>
        </ScrollView> */}
         <FlatGrid
            itemDimension={130}
            data={items}
            style={{marginTop: 10, backgroundColor:"#000", height:400}}
            spacing={10}
            renderItem={({ item }) => (
                <View>
                    <Image style={{width:150, height:150, borderRadius:10}} source={item.img}/>
                    <Text style={{fontSize:16, fontWeight:"bold"}}>{item.name}</Text>
                    <Text  style={{color:"#c67c4e", fontSize:14}}>{item.descrip}</Text>
                    <View style={{display:"flex", flexDirection:"row", width:150, justifyContent:"space-between"}}>
                        <Text style={{color:"#c67c4e", fontSize:16, fontWeight:"bold"}}>${item.price}</Text>
                        <Image style={{width:20, height:20, borderRadius:5}} source={require("../img/btnadd.png")} />
                    </View>
                    
                </View>
            )}
            />
        
      {/* <Image source={require("../img/bgk.png")} />
      <Text style={{color:"#fff",fontSize:25, textAlign:"center", margin:15}}>Coffe so good, your taste  buds will love it</Text>
      <Text style={{color:"#5f5f5f",fontSize:20, textAlign:"center", margin:15}}>The best grain, the finest roast, the powerful flavor</Text> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  }
});
