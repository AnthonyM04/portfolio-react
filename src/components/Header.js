import { Container, Row, Col } from "react-bootstrap"


export default function Header() {
    return(
        <Container>
            <Row>
                <Col>
                    <img src="https://picsum.photos/1400/300?random"
                    className="hero-image"
                    alt="Header"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1> Hello I'm a Software Engineer</h1>
                </Col>
            </Row>
        </Container>
    )
}