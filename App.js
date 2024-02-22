import React from "react";
// import { View } from "react-native";
import { AppRegistry } from "react-native";
// import App from "./App";
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from "./components/Home";

const App=()=>{
    return 
    <Provider store={store}>
<Home/>;
    </Provider>
}

export default App;
AppRegistry.registerComponent(appName,()=>App);