
import './App.css'
import Blog from './Components/Blogs/Blog'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  
  return (
    <>
   <Header></Header>
  <div className='md:flex'>
  <Blog></Blog>
  <Bookmark></Bookmark>
  </div>
    </>
  )
}

export default App
