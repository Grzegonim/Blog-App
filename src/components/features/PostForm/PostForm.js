import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "../Article/Button/Button";
import { useState } from "react";

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(action({ title, author, publishedDate, shortDescription, content }))
      navigate("/")
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control onChange={e => setAuthor(e.target.value)} value={author} type="text" placeholder="Enter author" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <Form.Control onChange={e => setPublishedDate(e.target.value)} value={publishedDate} type="text" placeholder="DD-MM-YYYY" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Short description</Form.Label>
          <Form.Control onChange={e => setDescription(e.target.value)} value={shortDescription} placeholder="Leave your comment here" as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Main Content</Form.Label>
          <Form.Control onChange={e => setContent(e.target.value)} value={content} placeholder="Leave your comment here" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    )    
}

export default PostForm;