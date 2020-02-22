import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImagetext
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }

  // Catches error for any children in the ErrorBoundary component
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  // componentDidCatch give access to error and info related to the error and how it got thrown
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.setState.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
          <ErrorImagetext> Sorry! This Page is Lost in Space</ErrorImagetext>
        </ErrorImageOverlay>
      );
    }
    // If no error render the children as normal
    return this.props.children;
  }
}

export default ErrorBoundary;
