import { categoriesList } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
    const categories = useSelector(categoriesList);
    categories.map(category => console.log(category.title))
    return (
        <div>
            {categories.map(category => <div><Link to={`/category/${category.title}`}>{category.title}</Link></div>)}
        </div>
    )
}

export default Categories;