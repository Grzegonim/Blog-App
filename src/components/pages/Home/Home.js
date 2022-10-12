import Article from "../../features/Article/Article";
import { useSelector } from "react-redux";
import { postsList } from "../../../redux/postReducer";
import { Container, Row } from "react-bootstrap";
import Button from "../../features/Article/Button/Button"
import { Link } from "react-router-dom";

const Home = () => {
  const postList = useSelector(postsList);

  return (
    <Container className="p-0">       
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <div>
        <Link to="/post/add"><Button variant={"outline-info"}>Add Post</Button></Link>
        </div>
      </div>
      <Row>
        {postList.map(post => <Article 
          title={post.title} 
          author={post.author} 
          date={post.publishedDate} 
          description={post.shortDescription}
          id={post.id}
          key={post.id}
          />
        )}
      </Row>      
    </Container>
  )
};

export default Home;