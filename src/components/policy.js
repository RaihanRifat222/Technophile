import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const policy = () => {
  return (
    <>
     <Container style={{marginTop: '50px'}}>
        <h1>Terms and Policy</h1>
        <br></br>
        <Row>
            <Col md={10}>
                <h4>Prices</h4>
                <p>Prices of products and services and delivery and other charges displayed on this website are current at the time of issue, but may change at any time and are subject to availability.</p>
                <h4>Orders</h4>
                <p>Any order placed by you in the manner described in this website is an offer by you to purchase a particular product for the price (including the delivery and other charges and taxes) specified in this website at the time you place your order on these Terms and Conditions. ClearSmile Brace reserve the right to accept or reject your offer for any reason, including, without limitation, the unavailability of any product, an error in the price or the product description posted on this website, or an error in your order. Your contract with us only comes into existence when it forwards confirmation of receipt of your order and payment.</p>
                <h4>Refund Policy</h4>
                <p>We hope you will be pleased with your purchase. Should you wish to return anything bought from us, we will be happy to refund or exchange a product provided it is in a fully resalable condition. Returns should be made within a resalable time (7 days) and in original, undamaged packaging. If we find that the product has not been returned us in fully resalable condition, we reserve the right to refuse a refund on the item If you are returning an item because of an error on our part or because it is damaged or defective, we will refund the delivery charges incurred in sending the item to you and pay your costs of returning it to us.</p>
                
            </Col>
        </Row>
     </Container>
    </>
  )
}

export default policy