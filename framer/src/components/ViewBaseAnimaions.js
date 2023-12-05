import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";

const ViewBasedAnimations = () => {
  const ref = useRef(null)
  const isInView = useInView (ref, {once: true});

  return (
    <Container>
      <div className="div1"/>
      <motion.div className="div2"
      initial={{opacity : 0}}
      whileInView={{opacity: 1}}
      transition={{duration : 1}}
      viewport={{once : true}}
      />
      <motion.div className="div3" 
      ref={ref}
      style={{
        background: isInView ? "blue" : "red",
      }}
      />
    </Container>
  );
};

const Container = styled.div`
.div1{
  height: 150vh;
  
}
.div2{
  height: 100vh;
  background: black;
}
.div3{
  height: 100vh;
  transition: 1s;
}
`

export default ViewBasedAnimations;
