import { useSelector } from "react-redux";
import { postsList } from "../../../redux/postReducer";
import { useParams } from "react-router-dom";
import Article from "../../features/Article/Article";
import { Container, Row } from "react-bootstrap";

const Category = () => {
    const { title } = useParams();
    const posts = useSelector(postsList);
    return (
        <Container className="p-0">
            <Row>
                {posts.map(post => title === post.category && 
                    <Article 
                        title={post.title} 
                        author={post.author} 
                        date={post.publishedDate} 
                        description={post.shortDescription}
                        id={post.id}
                        key={post.id}
                        category={post.category}
                    />
                )}
            </Row>
        </Container> 
    )
}

export default Category;