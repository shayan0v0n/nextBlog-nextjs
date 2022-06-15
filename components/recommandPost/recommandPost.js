import { Container, Col, Row } from 'react-bootstrap'
import RecommandPostStyle from "./recommandPost"
import RecommandCard from "./recommandCard/recommandCard"


const recommandPost = props => {
    const recommandPosts = props.posts
    console.log(recommandPosts)

    return (
        <div>
            <Container>
                <h2 className="text-center pt-1">...بهترین مقالات...</h2>
                <Row>
                    {recommandPosts.map(item => (
                        <Col sm="12" md="4" key={item.id}>
                            <RecommandCard cardInfo={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default recommandPost;