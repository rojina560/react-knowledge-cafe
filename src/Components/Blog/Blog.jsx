/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog , handleAddToBookmark})=> {
 const {title , cover ,author, author_img,  posted_date, reading_time} = blog;

    return (
        <div>
            <h1 className='text-4xl '>{title}</h1>

            <img className='w-full h-96' src={cover} alt={`cover picture of the title${title}`} />

            <div className='flex justify-between '>
                <div className='flex items-center gap-3'>
                    <div>
                    <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{ posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                     <button onClick={ ()=>handleAddToBookmark(blog)} ><FaBookmark></FaBookmark></button> 
                </div>
            </div>
        </div>
    );
};

export default Blog;