import { getPostsById } from "../../../redux/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams, Link } from "react-router-dom";
import Button from "../../features/Article/Button/Button";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import removePost from "../../../redux/postReducer";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allPosts = useSelector(state => getPostsById(state, id));
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const handleRemove = () => {
    console.log(allPosts.id)
    dispatch(removePost(allPosts.id))
    handleClose();
  };

  if(!allPosts) return <Navigate to="/" />
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>{allPosts.title}</h1>
        <div>
        <Link to={"/post/edit/" + allPosts.id}><Button variant={"outline-info"}>Edit</Button></Link>
        <Button variant={"outline-danger"} onClick={handleOpen}>Delete</Button>
        </div>
      </div>
      <p><b>Author: </b>{allPosts.author}</p>
      <p><b>Published: </b>{allPosts.publishedDate}</p>
      <p>{allPosts.content}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>The operation will completly remove your post. Do you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default Post;