import axios from 'axios'
import { Col, Row, Card, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SuggestCards from '../../../components/suggestCards/suggestCards'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import SingleInfoBanner from '../../../components/singleInfoBanner/singleInfoBanner'
import singleCCrStyle from './singleCC.module.scss'

const index = props => {
    const router = useRouter()
    const selectUser = props.singleUser.find(item => item.username === router.query.title)
    const createAddress = `${selectUser.address.country}، ${selectUser.address.city}، ${selectUser.address.street}، ${selectUser.address.alley}`;
    const popularUsers = props.singleUser.filter(item => item.id > 5)
    console.log(selectUser)
    return (
        <div>
            <Header />
            <main>
                <SingleInfoBanner imagePath="undraw_profile_pic_ic-5-t">
                    <h3>به صفحه شخصی {selectUser.name} خوش آمدید</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>
                    <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف</p>
                </SingleInfoBanner>
                <section>
                    <Container>
                        <Row>
                            <Col sm="12" md="8">
                                <div>
                                    <Card className={singleCCrStyle.singleCCCard}>
                                        <Card.Header>
                                            <Card.Img src="/assets/imgs/placeholder.png" />
                                        </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col md="6">
                                                    <Card.Title as="h2">{selectUser.name}</Card.Title>
                                                </Col>
                                                <Col md="6">
                                                    <Card.Title as="h2" className="text-center">محتوا نویس شماره: {selectUser.id}</Card.Title>
                                                </Col>
                                            </Row>
                                            <div className="mt-3">
                                                <h4>مشخصات</h4>
                                                <Card.Text>آدرس: {createAddress}</Card.Text>
                                                <Card.Text>پست الکترونیکی: {selectUser.email}</Card.Text>
                                                <Card.Text>وبسایت: {selectUser.website}</Card.Text>
                                                <Card.Text>شماره: {selectUser.phone}</Card.Text>
                                            </div>
                                            <div clasName="mt-3">
                                                <h4>توضیحات</h4>
                                                <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm="0" md="4" className="d-none d-md-block">
                               <div className={singleCCrStyle.asideBar}>
                                    <SuggestCards>
                                            <ul>
                                                {popularUsers.map(item => (
                                                    <Link href={`/content-creator/${item.username}`}>
                                                        <li style={{cursor: "pointer"}}>{item.name}</li>
                                                    </Link>
                                                ))}
                                            </ul>
                                    </SuggestCards>
                               </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const getSingleUser = await axios.get("https://jsonplaceholder.ir/users");
    const singleUserData = await getSingleUser.data;
    return {
        props: {
            singleUser: singleUserData,
        }
    }
}

export default index