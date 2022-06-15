import React from 'react'
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'
import Link from 'next/link'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import SuggestCards from '../../components/suggestCards/suggestCards'
import blogStyle from './blog.module.scss'

const index = ({ posts, users, allPosts }) => {
    return (
    <div>
        <Header />
            <div>
                <Row>
                    <Col sm="12" md="8">
                        <div className={blogStyle.posts}>
                            {allPosts.map(item => (
                                <Link href={`/blogs/${item.title}`}>
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>{item.body}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col sm="0" md="4" className="d-none d-md-block">
                        <div className={blogStyle.suggestsColumn}>
                            <SuggestCards>
                                <h5 className="text-center">...مقاله نویسان پیشنهادی...</h5>
                                <ul>
                                    {users.map(item => (
                                        <Link href={`/content-creator/${item.username}`}><li key={item.id} style={{cursor: "pointer"}}>{item.name}</li></Link>
                                    ))}
                                </ul>
                            </SuggestCards>
                            <SuggestCards>
                                <h5 className="text-center">...مقالات پیشنهادی...</h5>
                                <ul>
                                    {posts.map(item => (
                                        <Link href={`/blogs/${item.title}`}><li key={item.id} style={{cursor: "pointer"}}>{item.title}</li></Link>
                                    ))}
                                </ul>
                            </SuggestCards>
                        </div>
                    </Col>
                </Row>
            </div>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const postsResponsed = await axios.get("https://jsonplaceholder.ir/posts");
    const usersResponsed = await axios.get("https://jsonplaceholder.ir/users");
    const posts = await postsResponsed.data.splice(0, 5);
    const allPosts = await postsResponsed.data;
    const users = await usersResponsed.data.splice(0, 5);
    
    return {
        props: {
            posts,
            allPosts,
            users
        }
    }
}

export default index