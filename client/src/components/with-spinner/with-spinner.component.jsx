import React from 'react';
//Spinner
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  // If loading is true the load the SpinningOverlay and the Spinning Container
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
