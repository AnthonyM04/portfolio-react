import { Card, Col, Container, Row } from "react-bootstrap";
import portfolios from '../data/griddata.json'

export default function Grid() {
    return(
        <Container>
            <Row>
                {
                    portfolios.map(
                        (portfolio) => {
                            return (
                <Col key={portfolio.id} sm={12} md={6} lg={4} >
                    <Card>
                        <Card.Img src={portfolio.image} alt=""/>

                        <Card.Body>
                            <Card.Title>{portfolio.name}</Card.Title>
                            <Card.Text>{portfolio.description}</Card.Text>
                        </Card.Body>
                    </Card>  
                </Col>
                    )}
                    )
                }
            </Row>
        </Container>
    )
}