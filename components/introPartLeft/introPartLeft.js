import { Container, Image, Row, Col } from 'react-bootstrap'
import introPartStyle from './introPartLeft.module.scss';

const introPartRight = props => {
    return (
        <div className={introPartStyle.bodyIntroStyle}>
            <Container>
                <Row>
                    <Col sm="12" md="6" className="d-flex justify-content-center align-items-center" >
                        <Image src={`/assets/imgs/${props.imgPath}.svg`} className="img-fluid w-50" />
                    </Col>
                    <Col sm="12" md="6" className="d-flex justify-content-center flex-column">
                        <h2>{props.title}</h2>
                        <p>{props.children}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default introPartRight;