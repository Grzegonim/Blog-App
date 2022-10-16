import PostForm from "../PostForm/PostForm";
import { getPostsById } from "../../../redux/postReducer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPost } from "../../../redux/postReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector(state => getPostsById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        dispatch(editPost({ ...e, id }));
        navigate("/")
    };
    return (
        <PostForm
            action={handleSubmit}
            actionText={"Edit Post"} 
            title={post.title} 
            author={post.author} 
            publishedDate={post.publishedDate} 
            content={post.content} 
            shortDescription={post.shortDescription} 
        />
    )
};

export default EditPostForm;