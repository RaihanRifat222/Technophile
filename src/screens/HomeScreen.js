import React from 'react'
import AllProduct from '../productdata';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
  return (
    <>
    <Container>
        <Row>
             {AllProduct.map(product =>
              <Col md={4}>
                <Product p ={product} />
              </Col>

              )}
        </Row>
    </Container>
    </>
  )
}

export default HomeScreen