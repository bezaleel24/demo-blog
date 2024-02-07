import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
const { id} = useParams();
const {data:blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`) ;
const history = useHistory();

const handleClick = () =>{
    console.log('I wanna delete')
    fetch(`http://localhost:8000/blogs/${id}` ,{
        method: 'DELETE'
        
    })
    .then(()=>{
        console.log('deletedd')
        history.push('/')

    })
}

    return (
    <div className="blog-details">
       
        {isPending && <div> <h4>Loading...</h4> </div>}
        {error && <div> {error}</div>}
       
        {blog&&(
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete Blog</button> 
            </article>
        )}
        
    </div> );
}
 
export default BlogDetails;