import React from "react";
import { motion, MotionConfig} from "framer-motion";
import styled from "styled-components";

const Gestures = () => {
  return <Container>
    <MotionConfig
    transition={{duration: 0.125, ease: "easeInOut"}}>
    <motion.button className="example-button"
    whileHover={{scale: 1.05}}
    
    >
    Click me!
    </motion.button>
    <motion.button className="example-button button2"
    whileHover={{scale: 1.15}}
    whileTap={{scale: 0.85 , rotate: "-2.5deg"}}
    
    >
    Click me!
    </motion.button>
    </MotionConfig>
  </Container>;
};

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  gap: 0.8rem;
  .button2{
    background-color: red;
}
`;


export default Gestures;
