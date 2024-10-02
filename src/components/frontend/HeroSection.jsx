import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <section className='hero-section d-flex justify-content-center align-items-center'>
      <Container>
        <Row>
          <Col lg="6" className="hero-contant d-flex flex-column justify-content-center">
            <h1>Welcome To <span>Apna Bazaar</span></h1>
            <p>
              Discover the best deals on Daraz products at Apna Bazaar. Enjoy
              low prices and a wide selection of quality items.
            </p>
            <button className="btn">Discover Now</button>
          </Col>
          <Col lg="6" className="hero-img">
            <img src="/hero img.jpg" alt="IMG_NOT_FOUND"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection