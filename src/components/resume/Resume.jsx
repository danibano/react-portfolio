import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useRef } from "react";
import {
    useScroll,
    useTransform,
  } from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

const Resume = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const docs = [{ uri: require("./Resume.pdf") }];
    return (
        <Container id='resume' className='parallax-effect' ref={ref}>
            <Row>
                <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Row>
        </Container>
    )
}
export default Resume