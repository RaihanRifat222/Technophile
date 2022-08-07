import React, {useState} from 'react'
import { Card,Button, Row, Col } from 'react-bootstrap'
import products from '../productdata'
const Product = ({p}) => {
  const [varient, setVarient] = useState ();
  const [quantity, setQuantity] = useState (1);
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.image} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varients</h6>
                <select value={varient} onChange={e => setQuantity (e.target.value)}>
                    {p.varients.map( varient => (
                        <option >{varient}</option>
                    )

                    )}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select  value= {quantity} onChange={e=> setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((v,i) => (
                        <option 
                       
                        >{i+1}
                        </option>
                    )
                    )
                    }
                </select>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>Price : {p.prices[0][varient]  }</Col>
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
      </Card.Body>
    </Card>
  



  )
}

export default Product