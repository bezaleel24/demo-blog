import { Link } from "react-router-dom/cjs/react-router-dom";

const ErrorPage
 = () => {
    return ( 
        <div>
            <h1>404 Page not found</h1>
            <Link to = '/'>
            <h3>Click here to proceed to home page</h3>
            </Link>
           
        </div>
     );
}
 
export default ErrorPage
;