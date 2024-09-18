import React from 'react'
import TeachersList from '../TeachersList'
import HeaderComponent from '../page_header/HeaderComponent'

const Teacher = () => {
  return (
    <div>
    <div className='mb-5'> <HeaderComponent item1="Teachers"></HeaderComponent></div>
   
    <TeachersList> </TeachersList>
    </div>
  )
}

export default Teacher