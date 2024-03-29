import React from 'react'
import {Col, Row ,Container} from 'react-bootstrap'
export default function MenuItem({MITitle, MIDescription, MIPrice}) {
  return (
    <Col lg={6} className=" menu-item text-start  rounded py-1 px-4">
      <Container className="">
        <Row>
    <Col lg={8}>
    <h4 className="fw-bold text-white ">{MITitle}</h4>
    <div className="text-warning fw-semibold fst-italic text-wrap">{MIDescription/* .substring(0,100)+"..." */}</div>
    </Col>
    <Col lg={4}>
    <p className="fw-bold fs-4 text-white ">${MIPrice}</p>
    </Col>
    </Row>
    </Container>
    </Col>
  )
}
