import React from "react";
function Slider() {
    return (
        <>
            {/* slider start */}
            <section id="slider">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/windmills.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Responsive Website</h5>
                                <p>Its a Single Page Responsive Website.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/apple.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Responsive Website</h5>
                                <p>Its a Single Page Responsive Website.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/windmills.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Responsive Website</h5>
                                <p>Its a Single Page Responsive Website.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* slider end */}
        </>
    )
}

export default Slider