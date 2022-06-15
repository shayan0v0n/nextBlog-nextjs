import React from 'react'
import { useState, useEffect, useRef } from "react"
import { Card, Form, Container } from 'react-bootstrap'
import axios from 'axios'
import contentCreatorStyle from  './contentCreator.module.scss';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ContentCreatorCard from '../../components/contentCreatorCard/contentCreatorCard';
import IntroPartRight from '../../components/introPartRight/introPartRight'

const index = props => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.value = 3
    }, [])
    const prevUsers = props.users;
    const [searchable, setSearchable] = useState(0)
    let newUsers = [];
    if (searchable) {
        for(let i = 0;i <= searchable - 1;i++) {
            if (searchable <= props.users.length) {
                newUsers.push(prevUsers[i])
            }else {
                newUsers = prevUsers
            }
        }
    }else {
        newUsers = [prevUsers[0], prevUsers[1], prevUsers[2]]
    }


    return (
        <>
            <Header />
            <main>
                <IntroPartRight
                    imgPath="undraw_content_creator_re_pt5b2"
                    title="بهرتین ها رو پیدا کنید"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                </IntroPartRight>
                <Card className={`p-5 ${contentCreatorStyle.searchContentCreator}`}>
                    <Container>
                            <Form.Control
                             ref={inputRef}
                             type="number"
                             className="p-3"
                             placeholder="به چه تعداد نیاز دارید؟"
                             onChange={(e) => setSearchable(e.target.value)}
                             min="0"
                             max={props.users.length} />
                    </Container>
                </Card>
                <div>
                    <Container>
                        {newUsers.map(item => (
                            <ContentCreatorCard item={item} />
                        ))}
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const usersResponsed = await axios.get("https://jsonplaceholder.ir/users")
    const users = await usersResponsed.data;

    return {
        props: {
            users
        }
    }
}

export default index;