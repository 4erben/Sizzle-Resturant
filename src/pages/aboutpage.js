import React from 'react'
import "./css/aboutpage.css";
import { Container ,Row, Col } from 'react-bootstrap'
export default function AboutPage() {
  return (
  <Container fluid className="about-container py-5">
    
    <Container fluid className=" py-5 my-3">
      <Row >
      <Col className="text-center">
      {/* <p className="text-white fw-bold text-shadow">About</p>  */}
      <h4 className="text-white mb-3 display-4 fw-bold text-shadow">About Us</h4>
      </Col>
    </Row>
        <Row className=" p-lg-2 pb-lg-0 my-2">
            <Col lg={7} className="about-row1 py-5 d-flex justify-content-center align-items-end ">
            <div className="bg-white text-black fw-semibold px-3 py-2">About Resturant</div>
            </Col>
            <Col lg={5} className="p-0">
            <div className="text-white text-center py-5 px-2 fs-10 fst-italic bg-orange h-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </div>
            </Col>
        </Row>
        <hr className='my-3 bg-primary'/>
        <Row className="my-2">
            <Col lg={5} className="p-0 d-flex justify-content-center ">
            <div className="text-white text-center fs-10 fst-italic bg-orange py-5 px-2 h-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            </Col>
            <Col lg={7} className="about-row2 py-5 d-flex justify-content-center align-items-end ">
            <div className="bg-white text-black fw-semibold px-3 py-2">Our History</div>
            </Col>
        </Row>
        <hr className='my-3'/>
        <Row className="p-lg-2 pt-lg-0 my-2">
            <Col lg={4} className="about-row3 py-5 d-flex justify-content-center align-items-end">
            <div className="bg-white text-black fw-semibold px-3 py-2">Specific</div>
            </Col>
            <Col lg={4} className="p-0 d-flex justify-content-center text-center">
            <div className="text-white text-center  fs-10  fs-md-1 fst-italic bg-orange py-5 px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            </Col>
            <Col lg={4} className="about-row3-2 py-5 d-flex justify-content-center align-items-end">
            <div className="bg-white text-black fw-semibold px-3 py-2">Delicacies</div>
            </Col>
        </Row>
    </Container>
    </Container>
  )
}
