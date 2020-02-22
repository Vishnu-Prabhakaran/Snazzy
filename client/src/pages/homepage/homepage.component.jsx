import React, { Profiler } from 'react';
import Directory from '../../components/directory/directory.component';

// Styled component
import { HomePageContainer } from './homepage.styles';

// Wrap the profiler to the component that you want to profile
const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id='Directory'
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
