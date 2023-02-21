import { Container, Row, Col } from "react-bootstrap"

export default function Trident() {
    return(
        <Container className="trident">
        <Row className="bg-danger text-light">
            <Col>
                <h2>3 Things About Me</h2>
            </Col>
        </Row>
        <Row className="bg-success text-light">
                <Col sm={12} lg={4}>
                    <img src="/images/hp-icon-1.png" alt="ideas"/>
                    <h3>Ideas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat tincidunt elit, non feugiat mauris ornare in. Etiam ac nunc aliquam, posuere ex condimentum, mattis odio. Morbi dui mi, interdum id porttitor vitae, finibus eu ipsum. Suspendisse eu bibendum eros. Morbi tortor magna, pulvinar vel consectetur et, rhoncus sed turpis. Curabitur nisi turpis, dictum id dolor vel, suscipit porttitor sapien. Quisque quis est a nunc efficitur mollis id et augue.</p>
                </Col>

                <Col sm={12} lg={4}>
                    <img src="/images/hp-icon-3.png" alt="shield"/>
                    <h3>Shield</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius lacus sapien, vitae mollis mi mattis a. Vivamus mattis massa eget est efficitur aliquet. Integer lobortis iaculis mi, consectetur vehicula risus vehicula quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi aliquet ullamcorper ligula, eget condimentum eros semper quis.</p>
                </Col>

                <Col sm={12} lg={4}>
                    <img src="/images/hp-icon-2.png" alt="graph"/>
                    <h3>Graph</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed enim velit. Cras at pretium eros. Nunc vel gravida velit. Curabitur dignissim lorem sit amet ornare laoreet. Quisque condimentum nibh nunc. Mauris egestas arcu in dui molestie mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eget est malesuada, interdum lorem quis, porttitor risus.</p>
                </Col>
            </Row>
        </Container>
    )
}