import React from 'react'
import { Card,Button, Row, Col } from 'react-bootstrap'
const Product = ({p}) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.image} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select>
                    {p.varients.map( varient => (
                        <option value={varient}>{varient}</option>
                    )

                    )}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select>
                    {[...Array(10).keys()].map((v) => (
                        <option value= {v+1}>{v+1}</option>
                    )
                    )
                    }
                </select>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  



  )
}

export default Product