import React from 'react'
 import Banner1 from "../Banner1";
import { Header } from './Header';

import Ourcoursesmain from '../Allcourses/Ourcoursesmain';
import TeachersList from '../TeachersList';
import BrandSlider from '../BrandSlider';
import TestimonialSlider from '../Testimaonal';
import BlogsList from '../BlogsList';


function Home() {
  return (
    <>
    <Header/>
    <Banner1/>
  <Ourcoursesmain></Ourcoursesmain>
  <TeachersList></TeachersList>
  <BrandSlider></BrandSlider>
  <TestimonialSlider></TestimonialSlider>
  <BlogsList></BlogsList>
   
    
    </>
  )
}

export default Home