import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux"


const Header = () => {

  const cartData=useSelector((state)=>state.reducer);
  const [cartItems,setCartItems]=useState(0);
  console.warn(cartData);
  useEffect(()=>{
setCartItems(cartData.length)
  },[cartData])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:60,height:120,textAlign:"right", padding:20,backgroundColor:"orange"}}>
        {/* <View 
        style={{backgroundColor:"yellow",borderRadius:15, padding:20,fontSize:70,height:40, width:40}}
        >
          <Text style={{fontSize:40,}}>{cartItems}
          </Text></View> */}

          {cartItems}
        </Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Header;
