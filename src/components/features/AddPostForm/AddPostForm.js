import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postReducer";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    dispatch(addPost(e))
    navigate("/")
  };

  return (
    <PostForm action={handleSubmit} actionText={"Add Post"} />
  )
};

export default AddPostForm;