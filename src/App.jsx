
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [ bookmarks, setBookmarks] = useState([]);
const [ readingTime, setReadTime]=useState(0)

  

  const handleAddToBookmark =blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = ( id, time) =>{
  setReadTime (readingTime + time)
  //remove the read blog from bookmarks
  const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id 
    !== id);
    setBookmarks(remainingBookmarks)
  }

  
  return (
    <>
   <Header></Header>
  <div className='md:flex  max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark ={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
    
    
   
</div>

    </>
  )
}

export default App
