import React from 'react'
import "./css/bookpage.css";
import { Button, Col, Container , Form, Row } from 'react-bootstrap';
export default function BookPage() {
  return (
    <Container fluid className="bookpage-container py-5 ">
        <Container className="py-5 my-5 text-center">
            <Row>
                <Col lg={12}>
                <h5 className="text-white fw-bold">Reservation</h5>
                <h2 className="bs-orange text-shadow fw-bold">Book A Table</h2>
                </Col>
            </Row>
            <hr className="border border-3 border-warning"/>
            <Form>
            <Row>
                <Col md={12} lg={4}>
                    {/* Name Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white ">
                        Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                {/* Date Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white ">
                        Date
                    </Form.Label>
                    <Form.Control type="date" placeholder="Date" required/>
                </Form.Group>
                </Col>
                <Col md={12} lg={4}>
                    {/* Email Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white ">
                        Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="email@example.com" required/>
                </Form.Group>
                {/* Time Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white text-capitalize">
                        time of your visit
                    </Form.Label>
                    <Form.Control type="time" placeholder="last time you visited" required/>
                </Form.Group>
                </Col>
                <Col md={12} lg={4}>
                    {/* Phone Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white ">
                        Phone
                    </Form.Label>
                    <Form.Control type="text" placeholder="Phone" required/>
                </Form.Group>
                    {/* Phone Input */}
                <Form.Group className="p-2  m-2 ">
                    <Form.Label className="fw-semibold text-white ">
                        No. of People
                    </Form.Label>
                    <Form.Control type="number" placeholder="No. of People" required />
                </Form.Group>
                </Col>
                <Col lg={12}>
                    {/* Text area Message Input */}
                    <Form.Group className="p-2  m-2 ">
                        <Form.Label className="fw-semibold text-white "> Text Area</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Message" required/>
                    </Form.Group>
                </Col>
                <Col lg={12}>
                <Button type='submit' className="menu-button btn-active">Book A Table</Button>
                </Col>
                </Row>
            </Form>
        </Container>
    </Container>
  )
}
