import introPartStyle from './introPartRight.module.scss';
import { Container, Image, Row, Col } from 'react-bootstrap'

const introPartRight = props => {
    return (
        <div className={introPartStyle.bodyIntroStyle}>
            <Container>
                <Row>
                    <Col sm="12" md="6" className="d-flex justify-content-center flex-column">
                        <h2>{props.title}</h2>
                        <p>{props.children}</p>
                    </Col>
                    <Col sm="12" md="6" className="d-flex justify-content-center align-items-center" >
                        <Image src={`/assets/imgs/${props.imgPath}.svg`} className="img-fluid w-50" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default introPartRight;