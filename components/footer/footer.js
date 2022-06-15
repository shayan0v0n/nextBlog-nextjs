import footerStyle from './footer.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const footer = () => {
    return (
        <footer className={footerStyle.footerStyle}>
            <Container>
                <Row>
                    <Col sm="12" md="5">
                        <h3>درباره ما</h3>
                        <hr />
                        <p className="p-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>
                    </Col>

                    <Col sm="12" md="3">
                        <h3>صفحات دیگر سایت</h3>
                        <hr />
                        <ul>
                            <li>
                                <Link href="/">صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href="/blogs">مقالات</Link>
                            </li>
                            <li>
                                <Link href="/content-creator">محتوا نویسان</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col sm="12" md="4">
                        <h3>ارتباط با ما</h3>
                        <hr />
                        <p className="m-0 p-0">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله</p>
                        <div className="my-1">
                            <span className={footerStyle.contactusLink}><i className="fa fa-github mx-1"></i>shayan0v0n</span>
                            <span className={footerStyle.contactusLink}><i className="fa fa-telegram mx-1"></i>shayan._.vn</span>
                            <span className={footerStyle.contactusLink}><i className="fa fa-instagram mx-1"></i>shayan._vn</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer;