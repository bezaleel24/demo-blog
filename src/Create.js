import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const[title,setTitle]=useState()
    const[body,setBody]=useState('')
    const[author,setAurthor]=useState()
    const[isPending, setIsPending]=useState(false)
    const history = useHistory()

    const handleSubmit= (e) => {
      setIsPending(true)
      e.preventDefault()
       const blog = {title, body, author}
       console.log(blog)
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify(blog)
      })
      .then(()=>{
        console.log('New blog added')
        setIsPending(false)
        history.push('/')
      })

    }

    return ( 
      <div className="create">
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input 
            required
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />
            <label>Blog Body</label>
            <textarea
             required 
             type="text" 
             value={body} 
             onChange={(e)=>{setBody(e.target.value)}}
             ></textarea>
            <label>Blog Aurthor</label>
            <select 
            value={author}
            onChange={(e) => {setAurthor(e.target.value)}}>
                <option value="Emma">Emma</option>
                <option value="Mario">Mario</option> 
            </select>
            
             {!isPending&&<button>Add Blog</button>} 
             {isPending&&<button disabled>Adding blog...</button>}
        </form>
        
      </div>
     );
}       
 
export default Create;