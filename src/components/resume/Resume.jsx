import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import 'animate.css';

const Resume = () => {

    const docs = [{ uri: require("./Resume.pdf") }];
    return (
        <Container className='animate__animated animate__fadeIn animate__slow' id='resume'>
            <Row>
                <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
            </Row>
        </Container>
    )
}
export default Resume