import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Fade } from 'react-native-easy-animations';


const App = () => {
  /**
   * fadeIn = true, fadeOut = false => Fade In animation on start.
   * fadeIn = false, fadeOut = true => Fade Out animation on start.
   * If both start as true, the starting opacity is 0. 
   * If they are both false, the starting opacity is 1
   */
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const triggerFadeIn = ()=>{
    setFadeIn(true);
    setFadeOut(false);
  }

  const triggerFadeOut = ()=>{
    setFadeIn(false);
    setFadeOut(true);
  }


  return (
    <View style={styles.wrapper}>
    
      <Fade duration={500} fadeIn={fadeIn} fadeOut={fadeOut}>
        <Text>I am a very good example</Text>
      </Fade>
      
      <View>
        <TouchableOpacity onPress={triggerFadeIn}>
          <Text>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={triggerFadeOut}>
          <Text>Fade Out</Text>
        </TouchableOpacity>
      </View>
     
      {/* <Text>ola</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
