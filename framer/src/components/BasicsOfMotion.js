import React from "react";
import styled from "styled-components";
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from "react";


const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return <Container>
    <motion.button
    onClick={() => setIsVisible(!isVisible)}
    className="example-button"
    layout
    > 
      Show/Hide
    </motion.button>
    <AnimatePresence mode="popLayout">
    {isVisible && (
    <motion.div 
    initial={{
      rotate: "0deg",
      scale: 0,
      y: 0,
    }}
    animate = {{
      rotate: "180deg",
      scale: 1,
      y: [0, 150, -150, -150, 0],
    }}
    
    exit= {{
      rotate: "0deg",
      scale: 0,
    }}
    transition = {{
      duration: 1,
      ease: "backInOut",
      times: [0, 0.25, 0.5, 0.85, 1],

    }}
    ></motion.div>
    )}
    </AnimatePresence>
  </Container>;
};

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  gap: 0.8rem;
  div{
    width: 150px;
    height: 150px;
    background: black;
  }
`;


export default BasicsOfMotion;
