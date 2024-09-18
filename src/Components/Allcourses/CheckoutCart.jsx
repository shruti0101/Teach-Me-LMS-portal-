import HeaderComponent from '../page_header/HeaderComponent';
import './Checkout.css';

const CheckoutCart = () => {
  return (
    <>

    <HeaderComponent item1='checkout'></HeaderComponent>

    {/* checkout */}

    <div className='container-fluid'>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8">
                    <h3>Billing Details</h3>
                    <form>
                        <div className="row mb-3">

                            <div className="col-md-6 ">

                              
                            <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control input-icons" id="firstName" placeholder="First Name" />
                              

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email Address" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                            </div>
                        </div>

                        

                        <h3 className='pt-4 '>Payment Methods</h3>

                        <div className="mb-3   d-flex flex-wrap pay-method  ">
                           <div className='row col-sm-6'>
                                <div className="form-check pay-method-box ">
                                    <input className="form-check-input " type="radio" name="paymentMethod" id="creditCard" checked />
                                    <label className="form-check-label" htmlFor="creditCard">Credit or Debit Card</label>
                                </div>
                            

                           
                                <div className="form-check pay-method-box">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked />
                                    <label className="form-check-label" htmlFor="creditCard">Cash On Delivery</label>
                                </div>
                                </div>

                                <div className='row col-sm-6'>
                          
                                <div className="form-check pay-method-box ">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked />
                                    <label className="form-check-label" htmlFor="creditCard">Direct Bank Transfer</label>
                                </div>
                         
                            
                                <div className="form-check pay-method-box">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked />
                                    <label className="form-check-label" htmlFor="creditCard">Internet Banking</label>
                                </div>
                                </div>
                            



                        </div>



                        <h3 className='pt-4'>Payment Details</h3>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="cardName" className="form-label">Enter Name Card</label>
                                <input type="text" className="form-control" id="cardName" placeholder="Enter Name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" placeholder="Card Number" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="cvv" className="form-label">CVV Code</label>
                                <input type="text" className="form-control" id="cvv" placeholder="CVV" />
                            </div>
                        </div>
                    </form>
                  
                </div>

                <div className="col-md-4 mb-0 order-sum-bg py-5">
                    <h3 className='text-center'>Order Summary</h3>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="my-0">Front-End Web Development</h6>
                                <small className="text-muted">By John Doe</small>
                                <div className="text-warning">★★★★★ (20 Reviews)</div>
                            </div>
                            <span className="text-muted">$120</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="my-0">Advanced JavaScript</h6>
                                <small className="text-muted">By John Doe</small>
                                <div className="text-warning">★★★★★ (20 Reviews)</div>
                            </div>
                            <span className="text-muted">$120</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className='fw-bold'>Subtotal</span>
                            <strong >$230.00</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className='fw-bold'>Coupon Discount</span>
                            <strong>-$10</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className='fw-bold fs-3' style={{color:'#004439'}}>Total</span>
                            <strong className='fs-4' style={{color:'#004439'}}>$230.00</strong>
                        </li>
                    </ul>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Coupon Code" />
                        <button className="btn btn-success">Apply Coupon</button>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terms" />
                        <label className="form-check-label" htmlFor="terms">
                            I have read and agree to the website terms and conditions
                        </label>
                        <button className="btn btn-success mt-4">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    </div>



</>
  )
}

export default CheckoutCart