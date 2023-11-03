import { useState } from "react";
import { useEffect } from "react";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
useEffect(() =>{
fetch('blogs.json')
.then(res =>res.json())
.then(data => setBlogs(data))
}, []) 
    return (
        <header className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{ blogs.length}</h1>
            
        </header>
    );
};

export default Blog;