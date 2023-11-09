import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";


// eslint-disable-next-line react/prop-types, no-unused-vars
const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
useEffect(() =>{
fetch('blogs.json')
.then(res =>res.json())
.then(data => setBlogs(data))
}, []) 
    return (
        <header className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{ blogs.length}</h1>

            {
                blogs.map(blog => 
                <Blog key={blog.id}
                blog={blog} 
                handleAddToBookmark ={handleAddToBookmark} handleMarkAsRead ={handleMarkAsRead}

                   
             ></Blog>)
            }
            
        </header>
    );
};

export default Blogs;