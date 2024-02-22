import { StyleSheet, Text, View,Image,Button } from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux'; 
import { addToCart } from '../redux/action';

const Product = (props) => {
    const item=props.item;
    const dispatch = useDispatch();

    const handleAddToCart=(item)=>{
// console.log("added",item);
dispatch(addToCart(item))
    }
  return (
    <View style={{alignItems:"center",borderBottomColor:"orange",borderBottomWidth:2,padding:90}}>
    <Text style={{fontSize:60}}>{item.id}</Text>
    <Text style={{fontSize:60}}>{item.name}</Text>
    <Text style={{fontSize:60}}>{item.price}</Text>
    <Text style={{fontSize:60}}>{item.color}</Text>
    <Image style={{width:200,height:200, margin:20}} source={item.image}/>
   <Button title='Add To Cart' onPress={()=>handleAddToCart(item)}/>  
  </View>
  );
};


const styles = StyleSheet.create({
    container:{
        height:"100%"
        // flex:1
    }
});
export default Product;
