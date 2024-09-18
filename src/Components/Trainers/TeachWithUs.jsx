import HeaderComponent from '../page_header/HeaderComponent';
import './Teach.css';

const TeachWithUs = () => {
  return (
    <>
    <HeaderComponent item1='Join us'></HeaderComponent>

    {/* teach section 1 */}
    
<div className='container-fluid  '>
<div className='container'>
<div className='row  '>
    <div className='col-lg-7 col-md-12    '>
        <div className='teach-head pt-5 mt-4'>
            <img src='https://uiparadox.co.uk/templates/teach-me/assets/media/hero/hero-banner.png'  className='img-fluid'>

            </img>
        </div>

    </div>
        <div className='col-lg-5 col-md-12 py-5 my-5  '>
            <div className='teach-top-text'>
                <h2 className='teach-heading pb-2' style ={{color:'#2D2F31'}}>Come teach with us</h2>
                <p className='fw-bold' style ={{color:'black'}}>Become an instructor and change lives <br></br> — including your own</p>
                
                <button className="btn btn-success mt-3 " style={{width:'80%'}}>Get Started</button>
            </div>
        </div>
</div>




</div>
</div>

{/* section 2 */}
<div className='container-fluid mt-5 pt-5 mb-5    pb-5' style={{backgroundColor:'white',width:'100%'}}>
<div className='container'>
<div className='row ' >
<h3 className=' teach-body-heading text-center mt-4  '>So many reasons to start</h3>
<div className='col-lg-4 col-md-12 pt-5 mt-3'>
    <div className='teach-body-1 text-center'>
        <img src='https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg' className='img-fluid'></img>
    <h3 className='fw-bold'>Teach your way</h3>
        <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
    </div>
</div>

<div className='col-lg-4 col-md-12 pt-5 mt-3 '>
    <div className='teach-body-1 text-center'>
        <img src='https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg' className='img-fluid'></img>
    <h3 className='fw-bold'>Inspire learners</h3>
        <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
    </div>
</div>

<div className='col-lg-4 col-md-12 pt-5 mt-3 '>
    <div className='teach-body-1 text-center'>
        <img src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg' className='img-fluid'></img>
    <h3 className='fw-bold'>Get rewarded</h3>
        <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
    </div>
</div>
</div>

{/* section 3 */}






</div>
</div>






</>
  )
}

export default TeachWithUs