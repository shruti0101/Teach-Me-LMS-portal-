import "./HeaderComponent.css";

function HeaderComponent(props) {
  return (



    <>


      <header className="head ">
        <div className="container-fluid ">
          <div className="container">
            <div className="row  ">
              <div className=" col-md-7 col-lg-6  col-sm-12 header-text   ">

                {/* props */}
                <h1>{props.item1}</h1>

              </div>




              <div className=" col-md-6 px-0 d-none  d-md-block header-img ">
                <img
                  src="https://uiparadox.co.uk/templates/teach-me/assets/media/backgrounds/title-banner.png "
                  className="img-fluid"
                  alt=""
                ></img>
              </div>

            </div>
          </div>
        </div>
      </header>


























    </>




  );
}

export default HeaderComponent;
