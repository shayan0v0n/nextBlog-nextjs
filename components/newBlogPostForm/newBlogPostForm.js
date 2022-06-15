import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import newBlogPostFormStyle from './newBlogPostForm.module.scss'

const newBlogPostForm = () => {
    const [formTitle, setFormTitle] = useState("");
    const [titleValidation, setTitleValidation] = useState(false)
    const [formDesc, setFormDesc] = useState("");
    const [descValidation, setDescValidation] = useState(false);
    const [formValidation, setFormValidation] = useState(false);

    const checkFormValidation = () => {
        if(formTitle.length > 0) {
            setTitleValidation(true)
        }else {
            setTitleValidation(false)
        }

        if (formDesc.length > 0) {
            setDescValidation(true)
        }else {
            setDescValidation(false)
        }

        if (titleValidation && descValidation) {
            setFormValidation(true)
        }else {
            setFormValidation(false)
        }
    }

    const sendPostHandler = () => {
        const postData = {
            title: formTitle,
            body: formDesc
        }

        axios.post("https://nextblog-63864-default-rtdb.firebaseio.com/posts.json", postData)
        setFormTitle("")
        setFormDesc("")
        setTitleValidation(false)
        setDescValidation(false)
        setFormValidation(false)
    }
    
  return (
        <Form className={newBlogPostFormStyle.newBlogForm}>
            <Form.Group className="mb-3">
                <Form.Label>عنوان</Form.Label>
                    <Form.Control
                     type="text"
                     value={formTitle}
                     onChange={(e) => {setFormTitle(e.target.value); checkFormValidation()}}
                     placeholder="هر واقعیتی که ممکن است آشکار شود..." />
            </Form.Group>
            <Form.Group className="mb-3">
                    <Form.Label>متن اصلی</Form.Label>
                    <Form.Control
                     as="textarea"
                     value={formDesc}
                     onChange={(e) => {setFormDesc(e.target.value); checkFormValidation()}}
                     rows={10}
                     placeholder="متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی..." />
            </Form.Group>
            {formValidation ? (
                <Button className="w-100 btn-success" onClick={() => sendPostHandler()}>ارسال</Button>
                ) : (
                <Button className="w-100 btn-success" disabled>ارسال</Button>
            )}
        </Form>
  )
}


export default newBlogPostForm