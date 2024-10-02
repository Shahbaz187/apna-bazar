import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {
  const CardTitle = useRef();

  useEffect(() => {
    const cardTitle = document.querySelectorAll(".product-section .card-title");

    function truncateCardTitle(title , wordLimit = 10) {
      let words = title.textContent.split(' ')
      if (words.length > wordLimit) {
         title.textContent = words.slice(0, wordLimit).join(" ") + "...";
      }
    }
    cardTitle.forEach((title)=>{
      truncateCardTitle(title);
    })
    
  }, [])
  

  return (
    <section className="product-section">
      <div className="top-heading mb-5">
        <h2 className="text-center">Our Products</h2>
      </div>
      <div className="">
        <Container>
          <Row>
            <Col className='text-center mt-2'>
              <button className='btn w-100 p-type'>All</button>
            </Col>
            <Col className='text-center mt-2'>
              <button className='btn w-100 p-type'>Electronics</button>
            </Col>
            <Col className='text-center mt-2'>
              <button className='btn w-100 p-type'>Lifestyle</button>
            </Col>
            <Col className='text-center mt-2'>
              <button className='btn w-100 p-type'>Sports</button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5">
        <Row className="row-gap-4">
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          <Col className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <div className="card-img">
                <img
                  src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View2-1030x773.jpg"
                  alt="IMG_NOT_FOUND"
                  className="w-100"
                />
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Lorem ipsng elit. Nulla dicta debitis aliquid.fdf dfdfdfd
                  dfdfd dffdfd dfd
                </h4>
                <h5>
                  Rs : <span>300</span>
                </h5>
              </div>
            </div>
          </Col>
          {/* <Col className='col-6 col-md-4 col-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum quam exercitationem laudantium commodi dolore aperiam alias possimus! Eaque earum enim dolor sit, libero corporis cumque dolorem consequuntur accusantium cum?</Col> */}
          {/* <Col className='col-6 col-md-4 col-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum quam exercitationem laudantium commodi dolore aperiam alias possimus! Eaque earum enim dolor sit, libero corporis cumque dolorem consequuntur accusantium cum?</Col> */}
          {/* <Col className='col-6 col-md-4 col-lg-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum quam exercitationem laudantium commodi dolore aperiam alias possimus! Eaque earum enim dolor sit, libero corporis cumque dolorem consequuntur accusantium cum?</Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default Products