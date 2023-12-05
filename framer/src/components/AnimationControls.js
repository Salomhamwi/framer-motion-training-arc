import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";

const AnimationControls = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  }

  return <Container>
    <button 
    onClick={handleClick}
    className="example-button">Flip It</button>
    <motion.div
    variants={{
      initial: {
        rotate: "0deg",
      },
      flip: {
        rotate: "360deg",
      },
    }}
    initial="initial"
    animate = {controls}
    >

    </motion.div>
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

export default AnimationControls;
