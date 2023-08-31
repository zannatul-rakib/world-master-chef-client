import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./SingleBlog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container mx-auto my-10">
            <div className="grid gap-5">
                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;