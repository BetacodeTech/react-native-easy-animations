import React, { useEffect } from 'react';
import { Animated, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types'

const Fade = ({ children, duration, fadeIn, fadeOut, style }) => {
  const opacityOut = new Animated.Value(1);
  const opacityIn = new Animated.Value(0);

  useEffect(() => {
    /**
     * The Fade In will trigger is the fade in prop is true and the fade out is false.
     * The Fade Out animation will trigger with fade out true and fade in false.
     * If they are equal the animation won't trigger.
     * Check examples for more info.
     */
    if(fadeIn && !fadeOut){
      Animated.timing(opacityIn, {
        toValue: 1,
        duration: duration
      }).start();
    }    
    if(fadeOut && !fadeIn){
      Animated.timing(opacityOut, {
        toValue: 0,
        duration: duration
      }).start();
    }
  }, [fadeIn, fadeOut]);

  return (
    <Animated.View style={{...style, opacity: fadeIn ? opacityIn : opacityOut }}>
      {children}
    </Animated.View>
  )
}

Fade.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  duration: PropTypes.number,
  fadeIn: PropTypes.bool,
  fadeOut: PropTypes.bool,
  style: ViewPropTypes.style
}

Fade.defaultProps = {
  duration: 500,
  fadeIn: true,
  fadeOut: false
}


export default Fade;