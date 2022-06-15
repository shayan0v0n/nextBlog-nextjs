import axios from 'axios'
import Navbar from '../components/header/header';
import Footer from '../components/footer/footer';
import IntroPartRight from '../components/introPartRight/introPartRight';
import IntroPartLeft from '../components/introPartLeft/introPartLeft';
import RecommandPost from '../components/recommandPost/recommandPost';
import RecommandCC from '../components/recommandCC/recommandCC';

const index = (props) => {
    const recommandPosts = props.posts
    const recommandCC = props.users

    return (
        <>
            <Navbar />
            <main>
                <IntroPartRight
                 imgPath="undraw_publish_article_re_3x8h"
                 title="به نکست بلاگ خوش امدید"
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                </IntroPartRight>
                <RecommandPost posts={recommandPosts} />
                <IntroPartLeft
                 imgPath="undraw_add_notes_re_ln36"
                 title="بهترین هارو پیدا کنید"
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                </IntroPartLeft>
                <RecommandCC users={recommandCC} />
                <IntroPartRight
                 imgPath="undraw_content_creator_re_pt5b"
                 title="شما هم بنویسید"
                >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </IntroPartRight>
            </main>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const postsResponsed = await axios.get("https://jsonplaceholder.ir/posts")
    const usersResponsed = await axios.get("https://jsonplaceholder.ir/users")
    const posts = await postsResponsed.data.splice(0, 3);
    const users = await usersResponsed.data.splice(0, 3);

    return {
        props: {
            posts,
            users
        }
    }
}

export default index;