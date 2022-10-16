import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "../Article/Button/Button";
import { useState } from "react";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { categoriesList } from "../../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState('')
    const [dateError, setDateError] = useState('');
    const [contentError, setContentError] = useState('');
    const [categoryError, setCategoryError] = useState(false)

    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const categories = useSelector(categoriesList);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = e => {
      !category && setCategoryError(true)
      setContentError(!content);
      setDateError(!publishedDate);
      if(content && publishedDate && category){
        dispatch(action({ title, author, publishedDate, shortDescription, content, category }))
        navigate("/")
      }
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control 
            {...register("title", { required: true, minLength:3 })} 
            onChange={e => setTitle(e.target.value)} 
            value={title} 
            type="text" 
            placeholder="Enter title" 
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required, and it must have at least 3 signs</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            {...register("author", { required: true, minLength: 3 })}
            onChange={e => setAuthor(e.target.value)} 
            value={author} 
            type="text" 
            placeholder="Enter author" 
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">This field is required, and it must have at least 3 signs</small>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <DatePicker 
            onChange={setPublishedDate} 
            selected={publishedDate} 
          />
          {dateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Categories</Form.Label>
          <Form.Select onChange={e => setCategory(e.target.value)}>
            <option value="" >Choose category</option>
            {categories.map(category => <option key={category.id}>{category.title}</option>)}
          </Form.Select>
          {categoryError && <small className="d-block form-text text-danger mt-2">Please choose category</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Short description</Form.Label>
          <Form.Control 
            {...register("shortDescription", { required: true, minLength: 20 })}
            onChange={e => setDescription(e.target.value)} 
            value={shortDescription} 
            theme="snow" 
            placeholder="Leave your comment here" 
            as="textarea" 
            rows={3} 
          />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required, and it must have at least 20 signs</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Main Content</Form.Label>
          <ReactQuill 
            onChange={setContent} 
            value={content} 
            placeholder="Leave your content here" 
          />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
        <Button variant="primary" type="submit">
          {actionText}
        </Button>
      </Form>
    )    
}

export default PostForm;
