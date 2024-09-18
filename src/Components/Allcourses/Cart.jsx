import HeaderComponent from '../page_header/HeaderComponent';
import './Cart.css';

function Cart() {
    return (
        <>

            <HeaderComponent item1=' shopping cart'></HeaderComponent>

           {/* cart */}

           <div className="container-fluid mt-5">
           <div className='container'>
        <div className="row">
            {/* <!-- Course List Section --> */}
            <div className="col-lg-8 col-md-12 mb-5 pb-4 ">
            <div className=' d-lg-flex justify-content-between  mt-4 mb-4 pb-2 pt-2 d-none  d-lg-block '>
                <h4 className=''>Course</h4>
                <h4 className=''> Price</h4>
                </div>

                
                {/* <!-- Course Item 1 --> */}
                <div className="course-item ">
                    <span className="remove-item me-3"><i class="bi bi-x"></i></span>
                    <img src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/cart-image-2.png" className='img-fluid' alt="Course Image"></img>
                    <div className="course-info text-nowrap">
                        <h4 className='course-heading'>UI/UX Design</h4>
                        <small>By John Doe</small>
                        <small>⭐⭐⭐⭐⭐ (20 Reviews)</small>
                    </div>
                    <div className="course-price ">
                        <h6>$120.00</h6>
                    </div>
                </div>

                <div className="course-item ">
                    <span className="remove-item me-3"><i class="bi bi-x"></i></span>
                    <img src="https://uiparadox.co.uk/templates/teach-me/assets/media/course/cart-image-1.png" className='img-fluid' alt="Course Image"></img>
                    <div className="course-info text-nowrap">
                        <h4 className='course-heading'>Advance JavaScript</h4>
                        <small>By John Doe</small>
                        <small>⭐⭐⭐⭐⭐ (20 Reviews)</small>
                    </div>
                    <div className="course-price">
                        <h6>$120.00</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 pt-3 mb-5 pb-4">
                <div className="checkout-box  ">
                <div className='p-4'>
                    <h4 className='mb-3'>Total:</h4>
                    <h3>$240.00</h3>
                    <button className="btn btn-success w-100 mb-3">Proceed to Checkout</button>
</div>
                   
                   <div className='pt-3'>
                    <h5>Promotions</h5>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Coupon Code"></input>
                        <button className="btn btn-apply">Apply Coupon</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>


           
        </>
    );

}

export default Cart;