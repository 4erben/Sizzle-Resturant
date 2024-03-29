import React from 'react'
import { Col, Carousel } from 'react-bootstrap'
export default function CarouselItem({imgSrc1,imgSrc2,imgSrc3}) {
  return (
    <Col lg={4} className="d-flex flex-column text-center justify-content-center my-lg-0 my-3">
        <Carousel className="border  border-warning border-4">
        <Carousel.Item>
            <img className="img-fluid" alt='img1' src={imgSrc1}/>
        <Carousel.Caption>
          <h3>First slide label1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>    
        <Carousel.Item>
            <img className="img-fluid" alt='img1' src={imgSrc2}/>
        <Carousel.Caption>
          <h3>First slide label2</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>    
        <Carousel.Item>
            <img className="img-fluid" alt='img1' src={imgSrc3}/>
        <Carousel.Caption>
          <h3>First slide label3</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>    
        </Carousel>
        </Col>
  )
}
