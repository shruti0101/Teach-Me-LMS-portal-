import React from 'react'
import HeaderComponent from './page_header/HeaderComponent'
import BlogsList from './BlogsList'

const Blog = () => {
  return (
    <div>
<div className='mb-5'>   <HeaderComponent item1="blogs"></HeaderComponent></div>
  
    <BlogsList></BlogsList>
   
    
    
    </div>
  )
}

export default Blog