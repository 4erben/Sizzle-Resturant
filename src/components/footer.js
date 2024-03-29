import React from 'react';
import "./css/footer.css";
import { Container, Row , Col } from 'react-bootstrap';
export default function Footer() {
  return (
    <footer id="footer" className='bg-dark text-white absolute'> 
     <div>
      <Container fluid>  
        <Row>
        <Col lg={12} md={12} className="d-flex justify-content-around">
        <div className="d-flex align-items-center justify-content-center">
        <i className="fa-solid fa-utensils fa-2x bs-orange mx-2"></i>
        <h2 className="fw-bold bs-orange mx-2">Sizzle</h2>
        </div>
              <div className="social-links  d-flex justify-content-between align-items-center flex-gap-20"> 
                <a href="#"><i class="fa-brands fa-twitter bs-orange"></i></a> 
                <a href="#"><i class="fa-brands fa-facebook bs-orange"></i></a> 
                <a href="#"><i class="fa-brands fa-instagram bs-orange"></i></a> 
                <a href="#"><i class="fa-brands fa-youtube bs-orange"></i></a> 
            </div> 
          </Col> 
        </Row> 
        </Container>
    </div>  
  </footer> 
  )
}
