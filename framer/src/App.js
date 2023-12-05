import React from 'react';
import BasicsOfMotion from './components/BasicsOfMotion';
import Gestures from './components/Gestures';
import AnimationControls from './components/AnimationControls';
import ViewBasedAnimations from './components/ViewBaseAnimaions';
import ScrollAnimations from './components/ScrollAnimation';


//list of all our routes 
function App() {
  return (
    <div>
    {/* <BasicsOfMotion /> */}
    {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollAnimations />
    </div>
  );
}


export default App;