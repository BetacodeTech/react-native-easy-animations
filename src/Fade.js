import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types'

const Fade = ({ children, duration }) => {
  const opacity = new Animated.Value(0);


  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration
    }).start()
  }, []);

  return (
    <Animated.View style={{ opacity: opacity }}>
      {children}
    </Animated.View>
  )
}


Fade.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  duration: PropTypes.number
}

Fade.defaultProps = {
  duration: 500
}


export default Fade;