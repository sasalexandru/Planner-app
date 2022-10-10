import React from 'react';
import Lottie from 'lottie-react-native';

const CustomLoadingIndicator = () => {
  return (
    <Lottie
      source={require('../assets/lottie-triangle.json')}
      autoPlay
      loop
      style={{height: 45, alignSelf: 'center',}}
      colorFilters={[
        {
          keypath: 'button',
          color: '#F00000',
        },
        {
          keypath: 'Sending Loader',
          color: '#F00000',
        },
      ]}></Lottie>
  );
};

export default CustomLoadingIndicator;

