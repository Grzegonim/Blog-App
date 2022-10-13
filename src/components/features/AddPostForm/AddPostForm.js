import { Form } from "react-bootstrap";
import Button from "../../features/Article/Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postReducer";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setDescription] = useState(' ');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content }))
    navigate("/")
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Author</Form.Label>
      <Form.Control onChange={e => setAuthor(e.target.value)} type="text" placeholder="Enter author" />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Published</Form.Label>
      <Form.Control onChange={e => setPublishedDate(e.target.value)} type="text" placeholder="DD-MM-YYYY" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Short description</Form.Label>
      <Form.Control onChange={e => setDescription(e.target.value)} placeholder="Leave your comment here" as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Main Content</Form.Label>
      <Form.Control onChange={e => setContent(e.target.value)} placeholder="Leave your comment here" as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Add Post
    </Button>
  </Form>
  )
};

export default AddPostForm;