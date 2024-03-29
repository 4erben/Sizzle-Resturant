import React, { useEffect } from 'react';
import "./css/gallerypage.css";
import exImg1 from "./assets/carousel/anh.jpg";
import exImg2 from "./assets/carousel/eliv.jpg";
import exImg3 from "./assets/carousel/anna2.jpg";
import exImg4 from "./assets/carousel/anna1.jpg";
import exImg5 from "./assets/carousel/chad.jpg";
import exImg6 from "./assets/carousel/brooke.jpg";
import { Container ,Row ,Col} from 'react-bootstrap'
import CarouselItem from '../components/CarouselItem';

export default function GalleryPage() {
    useEffect(()=>{

    })
  return (
    <Container fluid className="gallerypage-container py-5">
    <Container fluid className=" my-5 ">
        <Row className="py-5"> 
        <Col lg={12} className="d-flex flex-column align-items-center text-center"> 
            <h5 className="text-white fw-bold">Gallery</h5>
            <h2 className="bs-orange text-shadow">Some Photos From Our Gallery</h2>
        </Col>
        </Row>
        
        <Row className=" d-flex justify-content-around">
        <div id="button-group-gallery" className="d-flex justify-content-center mb-2 ">
                <button className=" menu-button px-3 mx-3 btn-active" value={"food"}>Food</button>
                {/* <button className=" menu-button px-3 mx-3" value={"ambience"}>Ambience</button> */}
        </div>
        
        <hr className="border-3 border-primary"/>
        {/* First Carousel */}
        <CarouselItem 
        imgSrc1={exImg1}
        imgSrc2={exImg2}
        imgSrc3={exImg3}
        />
        {/* Second Carousel */}
        <CarouselItem 
        imgSrc1={exImg4}
        imgSrc2={exImg5}
        imgSrc3={exImg6}
        />
        </Row>
    </Container>
    </Container>
  )
}
