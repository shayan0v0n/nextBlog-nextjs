import { Container } from 'react-bootstrap'
import newBlogStyle from './newBlog.module.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import NewBlogPostForm from '../../components/newBlogPostForm/newBlogPostForm'
import BlogPosts from '../../components/blogPosts/blogPosts'

const index = props => {
  console.log(props)
  return (
    <div>
        <Header />
        <main>
          <Container>
            <NewBlogPostForm />
            {/* <BlogPosts blogPostsData={props.blogPosts} /> */}
          </Container>
        </main>
        <Footer />
    </div>
  )
}

export default index;