import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Fade } from 'react-native-easy-animations';


const App = () => {

  return (
    <View>
      <Fade duration={500} >
        <Text>TESTE</Text>
      </Fade>
      {/* <Text>ola</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
