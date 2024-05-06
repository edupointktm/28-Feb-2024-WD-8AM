import React from 'react'

function Our_team() {
  return (
   <>
   {/* Our Team start */}
  <section id="our-team">
    <div className="container">
      <div className="heading">Our Team</div>
      <div className="content">At variations of passages of Lorem Ipsum available, but the majority have suffered
        alteration..</div>
      <div className="row">
        <div className="col-sm-3">
          <div className="card">
            <div className="image"><img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/photo-1.jpg" alt /></div>
            <div className="title">John Doe</div>
            <div className="sub-title">CEO</div>
            <div className="social-media">
              <i className="fa-brands fa-facebook" />
              <i className="fa fa-google-plus" />
              <i className="fa fa-twitter" />
            </div>
          </div>
        </div>
        <div className="col-sm-3" data-aos="flip-left" data-aos-duration={500}>
          <div className="card">
            <div className="image"><img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/photo-2.jpg" alt /></div>
            <div className="title">Larry Doe</div>
            <div className="sub-title">Art Director</div>
            <div className="social-media">
              <i className="fa-brands fa-facebook" />
              <i className="fa fa-google-plus" />
              <i className="fa fa-twitter" />
            </div>
          </div>
        </div>
        <div className="col-sm-3" data-aos="zoom-in-up" data-aos-duration={500}>
          <div className="card">
            <div className="image"><img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/photo-3.jpg" alt /></div>
            <div className="title">Ranith Kays</div>
            <div className="sub-title">Manager</div>
            <div className="social-media">
              <i className="fa-brands fa-facebook" />
              <i className="fa fa-google-plus" />
              <i className="fa fa-twitter" />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="image"><img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/photo-4.jpg" alt /></div>
            <div className="title">Joan Ray</div>
            <div className="sub-title">Creative</div>
            <div className="social-media">
              <i className="fa-brands fa-facebook" />
              <i className="fa fa-google-plus" />
              <i className="fa fa-twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Team end */}
   </>
  )
}

export default Our_team