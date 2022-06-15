import { Container, Row, Col, Image, Carousel, Card } from 'react-bootstrap';
import aboutUsStyle from './contactUs.module.scss';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const index = props => {
    return (
        <>
        <Header />
        <main>
            <Container>
                <div className={aboutUsStyle.bannerStyle}>
                    <Row>
                        <Col sm="12" md="6"className="d-flex justify-content-center flex-column">
                            <h2>با ما در ارتباط باشید</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                        </Col>
                        <Col sm="12" md="6" className="d-flex justify-content-center align-items-center" >
                            <Image src="/assets/imgs/undraw_term_sheet_re_ju7s.svg" className="w-50" />
                        </Col>
                    </Row>
                </div>
            </Container>
            <div>
                <Container>
                    <Carousel className="my-5">
                        <Carousel.Item>
                            <Row>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                        <i className={`fa fa-github ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Github</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                    <i className={`fa fa-telegram ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Telegram</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                    <i className={`fa fa-instagram ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Instagram</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                    <i className={`fa fa-twitter ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Twitter</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                    <i className={`fa fa-facebook ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Facebook</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card className={`text-center p-3 ${aboutUsStyle.aboutUsCards}`}>
                                    <i className={`fa fa-envelope ${aboutUsStyle.socialIcons}`}></i>
                                        <Card.Body>
                                            <Card.Title>Gmail</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default index;