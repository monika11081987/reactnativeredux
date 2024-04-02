import React from "react";
import { StyleSheet,View,ScrollView,Button} from 'react-native';
import Header from "./Header";
import Product from "./Product";

const ProductWrapper = ({navigation}) => {

  const products=[
    {
      id:"1",
    name:"Samsung mobile",
    color:"white",
    price:30000,
    image:require("../assets/mobile.png"),
  },
  {
    id:"2",
    name:"Apple mobile",
    color:"black",
    price:130000,
    image:require("../assets/mobile.png"),
  },{
    id:"3",
    name:"Nokia mobile",
    color:"cream",
    price:20000,
    image:require("../assets/mobile.png"),
  }
]

  return (
    // <Provider store={store}>
    <View style={styles.container}>
        <Button title="Go to user list" onPress={()=>navigation.navigate("User")}/> 
    <Header/>
    <ScrollView>
    {products.map((item)=><Product item={item}/>)
    }
     </ScrollView>
    
     </View>
    //  </Provider>
  );
};

// AppRegistry.registerComponent(appName,()=>App);

const styles = StyleSheet.create({
    container:{
        flex:1
    },
});
export default ProductWrapper;
