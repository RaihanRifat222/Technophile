import React from 'react'
import Product from '../productdata'
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
const ProductDetails = ({match}) => {
    const product=Product.find((p) => p._id === match.params.id)
  return (
    <div>
        <Row>
            <Col md ={6}>
             
                {/* <Image src={product.image} alt={product.name} fluid/> */}
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </div>
  )
}

export default ProductDetails