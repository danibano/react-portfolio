import me from '../images/dance.png'
import { useRef } from "react";
import {
    useScroll,
    useTransform,
    motion,
  } from "framer-motion";
import './about.css'

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className='parallax-effect'>
            <div ref={ref}>
                <img id='about-img' src={me}/>
            </div>
            <motion.div style={{ y }}>
                <h2>About Me</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque velit aperiam modi distinctio perferendis necessitatibus! Quia aliquid nobis libero aliquam asperiores nisi! Iste illo, excepturi nesciunt minima ipsa ducimus?</p>
            </motion.div>
        </section>
    )

    // return (
    //     <div>
    //         <div className='about-box parallax-effect' ref={ref}>
    //             <div id='about'>
    //                 {/* <div className='wrapper'>
    //                     <img className='about-img' src={me}></img>
    //                 </div>
    //                 <div className='about-text'>
    //                     <h2> About Me</h2>
    //                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque velit aperiam modi distinctio perferendis necessitatibus! Quia aliquid nobis libero aliquam asperiores nisi! Iste illo, excepturi nesciunt minima ipsa ducimus?</p>
    //                 </div> */}
    //             </div>
    //         </div>
    //         <motion.div style={{ y }} className='about-text parallax-text'>
    //             <h2> About Me</h2>
    //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque velit aperiam modi distinctio perferendis necessitatibus! Quia aliquid nobis libero aliquam asperiores nisi! Iste illo, excepturi nesciunt minima ipsa ducimus?</p>
    //         </motion.div>
    //     </div>
    // )
}

export default About