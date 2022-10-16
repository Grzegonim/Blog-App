import styles from "./Article.module.scss";
import { Col } from "react-bootstrap";
import Button from "./Button/Button";
import { Link } from "react-router-dom";
import DateToStr from "../../../utils/DateToStr";

const Article = ({title, author, date, description, id, category}) => {
  return (
      <Col className="col-4 p-2">
        <div className="border rounded p-2">
          <p><b>{title}</b></p>
          <p><b>Author:</b> {author}</p>
          <p><b>Published:</b></p><DateToStr date={date} />
          <p><b>Category: </b>{category}</p>
          <p>{description}</p>
          <Link className={styles.buttonLink} to={"/post/" + id}><Button variant={"primary"}>Read more</Button></Link>
        </div>
      </Col>
  )
};

export default Article;