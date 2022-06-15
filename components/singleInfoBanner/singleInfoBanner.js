import { Container, Image, Col, Row } from 'react-bootstrap'
import singleInfoStyle from './singleInfoBanner.module.scss'

const singleInfoBanner = props => {
  return (
    <Container>
        <div className={singleInfoStyle.singleInfoBanner}>
            <Row>
                <Col sm="12" md="6">
                    {props.children}
                </Col>
                <Col sm="12" md="6" className="text-center">
                    <Image src={`/assets/imgs/${props.imagePath}.svg`} className="w-50" />
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default singleInfoBanner