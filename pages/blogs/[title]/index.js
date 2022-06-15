import { Container, Col, Row, Card } from 'react-bootstrap'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SingleInfoBanner from '../../../components/singleInfoBanner/singleInfoBanner'
import SuggestCards from '../../../components/suggestCards/suggestCards'
import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import singleBlogStyle from './singleBlog.module.scss'

const index = props => {
    const router = useRouter()
    const selectPost = props.singlepost.find(item => item.title === router.query.title);
    const popularPosts = props.singlepost.filter(item => item.id <= 5)
    return (
        <div>
            <Header />
            <main>
                <SingleInfoBanner imagePath="undraw_text_files_au1q">
                    <h2>{selectPost.title}</h2>
                    <p>{selectPost.body}</p>
                </SingleInfoBanner>
                <section>
                    <Container>
                        <Row>
                            <Col sm="12" md="8">
                                <div>
                                    <Card className={singleBlogStyle.singlePostCard}>
                                            <Card.Header>
                                                <Card.Img src="/assets/imgs/placeholder.png" />
                                            </Card.Header>
                                            <Card.Body>
                                                <Row>
                                                    <Col sm="12" md="6">
                                                        <Card.Title as="h2">{selectPost.title}</Card.Title>
                                                    </Col>
                                                    <Col sm="12" md="6">
                                                        <Card.Title as="h3" className="text-center">مقاله شماره: {selectPost.id}</Card.Title>
                                                    </Col>
                                                </Row>
                                                <div className='pt-3'>
                                                    <Card.Text>{selectPost.body}</Card.Text>
                                                    <Card.Text>تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</Card.Text>
                                                    <Card.Text>{selectPost.body}</Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                </div>
                            </Col>
                            <Col sm="0" md="4" className="d-none d-md-block">
                               <div className={singleBlogStyle.asideBar}>
                                    <SuggestCards>
                                            <ul>
                                                {popularPosts.map(item => (
                                                    <Link href={`/blogs/${item.title}`}>
                                                        <li style={{cursor: "pointer"}}>{item.title}</li>
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
    const getSinglepost = await axios.get("https://jsonplaceholder.ir/posts");
    const singlepostData = await getSinglepost.data;
    return {
        props: {
            singlepost: singlepostData,
        }
    }
}

export default index