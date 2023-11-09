/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ( {bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 ">
            <div>
                <h2 className="text-4xl"> Reading time:{readingTime}</h2>
            </div>
    <h2 className="text-3xl text-center" >bookmarked blogs:{bookmarks.length}</h2>
    {
        bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark ={bookmark}></Bookmark>)
    }
        
    </div>
    );
};

export default Bookmarks;