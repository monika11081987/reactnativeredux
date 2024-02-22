import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:70,textAlign:"right", padding:10,backgroundColor:"orange"}}>0</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        // flex:1
    }
})
export default Header;
