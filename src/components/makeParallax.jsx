import { forwardRef, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const makeParallax = (Component) => {
    return forwardRef((props, ref) => {
        const { scrollYProgress } = useScroll({ target: ref });
        const y = useParallax(scrollYProgress, 300);
        return <Component ref={ref} parallaxText={y} {...props}/>
    })
}

export default makeParallax