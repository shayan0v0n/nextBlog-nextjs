import React from 'react';
import recommandCCStyle from  './recommandCC.module.scss';
import RecommandCard from './recommandCard/recommandCard'
import { Row, Col, Container } from 'react-bootstrap'

const recommandCC = props => {
    return (
        <Container>
            <h2 className="text-center pt-1">...بهترین مقاله نویسان...</h2>
            <Row>
                {props.users.map((item, index) => (
                    <Col sm="12" md="4" key={index}>
                        <RecommandCard cardData={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default recommandCC;