import { StyleSheet,View,ScrollView,
    // AppRegistry
 } from 'react-native';
// import React from 'react';
// import Header from './components/Header';
// import Product from './components/Product';
// import{name as appName} from './app.json';
// import {Provider} from 'react-redux';
// import store from './redux/store';

import Header from "./Header";
import Product from "./Product";

const Home = () => {

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
export default Home;
